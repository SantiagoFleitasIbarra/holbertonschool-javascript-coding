#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const todos = JSON.parse(body);
  const completeTasks = {};
  todos.forEach(function (todo) {
    if (todo.completed) {
      if (completeTasks[todo.userId]) {
        completeTasks[todo.userId] += 1;
      } else {
        completeTasks[todo.userId] = 1;
      }
    }
  });
  console.log(completeTasks);
});
