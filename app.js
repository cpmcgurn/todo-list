/**
 * Requires
 */
const express = require('express');
const ejs = require('ejs');

/**
 * Configuration
 */
const app = express();
const PORT = 3000;
const HOST = 'localhost';
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

/**
 * App variables
 */
 const todoItems = [];

/**
 * Route handling
 */
app.get('/', (req, res) => {
  res.render('todo');
})

app.post('/', (req, res) => {
  const newTodoItem = req.body.todo;
  todoItems.push(newTodoItem);
  res.redirect('/');
});

/**
 * Start server
 */
app.listen(PORT, HOST, () => {
  console.log(`Server started on port ${PORT}`);
})
