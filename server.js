const express = require('express');
const path = require('path');
const app = express();
const user = () => false;

app.use('/user', (req, res, next) => {
  if (user()) next();
  else res.status(401).send('login');
});
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './views/about.html'));
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, './views/info.html'));
});

app.listen(8000, () => {
  console.log('Server is runing on port: 8000');
});
