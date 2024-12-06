const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3001;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/api', (req, res) => {
  console.log('Api requisitada');
  res.send('Lacrei Saúde');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
