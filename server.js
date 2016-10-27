const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

// Expected format: JS_ENV="A_KEY=the-value,ANOTHER_KEY=12345678"
const jsEnv = process.env.JS_ENV;

// serve static assets normally
app.use(express.static(__dirname + '/dist'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.set('JS_ENV', jsEnv);
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);