#!/usr/bin/env node

const program = require('commander');
const createServer = require('./server');

program
  .version('0.1.0')
  .description('Cli to create a simple static server');

program
  .arguments('[dir]')
  .option('-p, --port <port>', 'designated port the static server based on')
  .action((dir) => {
    let staticDir = '';
    const rootDir = process.cwd();

    if (!dir) {
      staticDir = rootDir;
    } else {
      staticDir = rootDir + '/' + dir;
    }

    createServer(staticDir, program.port);
  })

program.parse(process.argv);