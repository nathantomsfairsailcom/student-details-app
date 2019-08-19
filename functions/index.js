// Firebase
const functions = require('firebase-functions');

//==============================================================================
// Endpoints
//==============================================================================

exports.save = functions.https.onRequest((req, res) => {
  // TODO save something

  res.status(201).send('Details saved successfully');
});
