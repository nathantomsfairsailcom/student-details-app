//==============================================================================
// Environment
//==============================================================================

// Firebase
const functions = require('firebase-functions');

// Firestore
const Firestore = require('@google-cloud/firestore');
const firestore = new Firestore({
  projectId: 'student-details-app-sgp',
  timestampsInSnapshots: true,
});

/*
 * CORS middleware required because the hosting domain and Cloud Functions domain
 * are not the same.
 *
 * See https://stackoverflow.com/questions/42755131/enabling-cors-in-cloud-functions-for-firebase
 */
const cors = require('cors')({origin: true});

/*
 * This is currently a "test" collection, which means anyone with the URL can
 * make the below request without authenticating. In production we would want to
 * use a private collection, which would require some authentication in here.
 */
const studentsTable = 'students';

//==============================================================================
// Endpoints
//==============================================================================

/**
 * Save a new Student to the Students collection.
 */
exports.save = functions.https.onRequest((req, res) => {

  // Deny forbidden request methods
  if (req.method === 'GET' || req.method === 'PUT' || req.method === 'DELETE') {
    return cors(req, res, () => {
      res.status(403).send(
        {error: ('Could not perform ' + req.method + ' operation.')}
      );
    });
  }

  // Get details from request
  const newRecord = {
    name: req.body.name,
    email: req.body.email,
    degreeTitle: req.body.degreeTitle,
    currentYearOfStudy: req.body.currentYearOfStudy
  };

  // Add to database
  return firestore.collection(studentsTable)
    .add(newRecord)
    .then(() => {
      return cors(req, res, () => {
        res.status(201).send({message: 'Details saved successfully.'});
      });
    })
    .catch(err => {
      console.error(err);
      return cors(req, res, () => {
        res.status(500).send({message: 'Unable to store details.', error: err});
      });
    });
});
