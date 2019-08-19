// Firebase
const functions = require('firebase-functions');

/*
 * CORS middleware required because the hosting domain and Cloud Functions domain
 * are not the same.
 *
 * See https://stackoverflow.com/questions/42755131/enabling-cors-in-cloud-functions-for-firebase
 */
const cors = require('cors')({origin: true});

//==============================================================================
// Endpoints
//==============================================================================

exports.save = functions.https.onRequest((req, res) => {
  // TODO save something

  return cors(req, res, () => {
    res.status(201).send({
      message: 'Details saved successfully'
    });
  });
});
