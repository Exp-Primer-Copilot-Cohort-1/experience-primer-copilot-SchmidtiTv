// Create web server that can accept a POST request to /comments and save the data to the comments array below.
// The server should respond with a 201 status code and the comment data in the response body.
// If the request body is empty, the server should respond with a 400 status code.

// The comments array will be reset each time the server restarts.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  if (comment) {
    comments.push(comment);
    res.status(201).json(comment);
  } else {
    res.status(400).json('Bad request');
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});