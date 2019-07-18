const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res, next) => {
  const helloData = {
    status: 'ok',
    timestamp: new Date(),
    msg: 'Hello, SREC! :)'
  };
  console.log('['+new Date()+'] Incoming request from: ',req.ip);
  res.status(200);
  res.json(helloData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));