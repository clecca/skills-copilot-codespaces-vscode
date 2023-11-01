// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3
// http://localhost:3000/comments/4

// Import express
const express = require('express');
// Create an express application
const app = express();
// Import comments data
const comments = require('./comments.json');

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  // Send all comments
  res.send(comments);
});

// Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  // Find comment by id
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  // Send comment
  res.send(comment);
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  // Create a comment
  const comment = {
    id: comments.length + 1,
    body: req.body.body,
    postId: 1
  };
  // Add comment to comments array
  comments.push(comment);
  // Send comment
  res.send(comment);
});

// Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  // Find comment by id
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  // Update comment body
  comment.body = req.body.body;
  // Send comment
  res.send(comment);
});

// Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  // Find comment by id
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  // Get comment index
  const index = comments.indexOf(comment);
  // Delete comment
  comments.splice(index, 1);
  // Send comment
  res.send(comment);
});

// Create web server
app.listen(3000, () => console.log('Listening on port 3000...'));