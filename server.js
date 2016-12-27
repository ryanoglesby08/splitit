const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// Expected format is JSON
const jsEnv = process.env.JS_ENV;

// serve static assets normally
app.use(express.static(__dirname + '/dist'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.set('JS-ENV', jsEnv);
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
