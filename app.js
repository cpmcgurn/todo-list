/**
 * Requires
 */
const express = require('express');
const ejs = require('ejs');

/**
 * Configuration
 */
const app = express();
const port = 3000;
const host = 'localhost';
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

/**
 * Route handling
 */
app.get('/', (req, res) => {
  res.send('Hello world');
})

/**
 * Start server
 */
app.listen(port, host, () => {
  console.log(`Server started on port ${port}`);
})