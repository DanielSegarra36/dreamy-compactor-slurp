const express = require('express');

const app = express();
const port = 3000;

let postData = null;

app.use(express.json());

app.post('/api/data', (req, res) => {
  postData = req.body;
  res.json({ message: 'Data received successfully.' });
});

app.get('/api/data', (req, res) => {
  postData = "CAN YOU SEE WHAT I SEEE"
  if (postData) {
    res.json(postData);
  } else {
    res.status(404).json({ error: 'No data found.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
  When you are ready run this in the shell (open new tab and type 'shell')
  Paste the line below and hit 'Enter':
  curl https://basic-server-and-api.itag-c5.repl.co/api/data
*/