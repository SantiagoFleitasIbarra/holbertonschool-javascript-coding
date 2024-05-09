#!/usr/bin/node

const fetch = require('node-fetch');

const url = process.argv[2];

fetch(url).then(function (response) {
  console.log(`code: ${response.status}`);
});
