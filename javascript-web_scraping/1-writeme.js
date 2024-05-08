#!/usr/bin/node

const fs = require('fs');

const file = process.argv[2];
const string = process.argv[3];

fs.writeFile(file, string, 'utf-8', function (error) {
  if (error) {
    console.error(error);
  }
});
