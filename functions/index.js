//==============================================================================
// Environment
//==============================================================================

const projectId = 'student-details-app-sgp';

// Firebase
const functions = require('firebase-functions');

// Firestore
const Firestore = require('@google-cloud/firestore');
const firestore = new Firestore({
  projectId: projectId,
  timestampsInSnapshots: true,
});

/*
 * This is currently a "test" collection, which means anyone with the URL can
 * make the below request without authenticating. In production we would want to
 * use a private collection, which would require some authentication in here.
 */
const students = firestore.collection('students');

/*
 * CORS middleware required because the hosting domain and Cloud Functions domain
 * are not the same.
 *
 * https://cloud.google.com/functions/docs/writing/http#handling_cors_requests
 * https://stackoverflow.com/questions/42755131/enabling-cors-in-cloud-functions-for-firebase
 */
const cors = require('cors')({origin: true});
const express = require('express');
const app = express();
app.use(cors);
app.options('*', cors);

//==============================================================================
// Endpoints
//==============================================================================

/**
 * Save a new Student to the Students collection.
 */
exports.save = functions.https.onRequest((req, res) => {

  // Deny forbidden request methods
  if (req.method === 'GET' || req.method === 'PUT' || req.method === 'DELETE') {
    return res.status(403).send({
      error: ('Could not perform ' + req.method + ' operation.')
    });
  }

  // Authorize response (CORS)
  res.set('Access-Control-Allow-Origin', '*');

  // Respond for CORS pre-flight requests
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    return res.status(204).send('');
  }

  // Get details from request
  const newRecord = {
    name: req.body.name,
    email: req.body.email,
    degreeTitle: req.body.degreeTitle,
    currentYearOfStudy: req.body.currentYearOfStudy
  };

  // Perform insert
  return students.where('email', '==', newRecord.email)
    .get()
    .then(querySnapshot => {

      // If it is not a duplicate, save it
      if (querySnapshot.empty) {
        return students.add(newRecord)
          .then(() => res.status(201).send(
            {message: 'Details saved successfully.'}
          )).catch(err => {
            console.error(err);
            return res.status(500).send({message: 'Unable to store details.'});
          });
      } else {

        // This is a duplicate email, so return a conflict error
        return res.status(409).send(
          {message: newRecord.email + ' already exists.'}
        );
      }

    }).catch(err => {
      console.error(err);
      return res.status(500).send({message: 'Unable to store details.'});
    });
});
