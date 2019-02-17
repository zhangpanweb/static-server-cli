const express = require('express');

const app = express();

const PORT = 9000;

const createServer = (staticDir, port = PORT) => {
  app.use(express.static(staticDir));

  app.listen(port, () => {
    console.info(`Your static server has been established on:
    ${staticDir}

visit http://127.0.0.1:${port}
    `)
  });
}

module.exports = createServer;