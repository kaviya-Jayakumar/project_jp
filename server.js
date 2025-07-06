// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const attendance = [];

app.post('/api/attendance', (req, res) => {
  attendance.push(req.body);
  res.status(200).send({ message: 'Data saved locally' });
});

app.get('/api/attendance', (req, res) => {
  res.status(200).json(attendance);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
