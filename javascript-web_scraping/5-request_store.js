#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filepath = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  if (response.statusCode === 200) {
    fs.writeFile(filepath, body, 'utf-8', function (error) {
      if (error) {
        console.error(error);
      }
    });
  }
});
