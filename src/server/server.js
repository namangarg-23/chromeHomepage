const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5100;
const notesFilePath = path.join(__dirname, 'notes.txt');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle note submission
app.post('/add-note', (req, res) => {
  const note = req.body.note;
  if (note) {
    fs.appendFile(notesFilePath, `${note}\n`, (err) => {
      if (err) {
        return res.status(500).send('Error writing to file');
      }
      res.send('Note added successfully');
    });
  } else {
    res.status(400).send('No note provided');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
