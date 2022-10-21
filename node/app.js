const express = require('express');
const app = express();
const path = require('path');


// Path to static directory
// app.use(express.static('static'));
app.use(express.static(path.join(__dirname, 'data')));
app.use(express.static(path.join(__dirname, 'static')));


// Response
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;