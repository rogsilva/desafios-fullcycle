const express = require('express');
const utils = require('./utils');

const app = express();
app.disable("x-powered-by");

app.get('/', (req, res) => {
  res.send(utils.greeting('Full Cycle'));
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

module.exports = app;
