'use strict';

// Your first function handler
module.exports.hello = (event, context, cb) => {
  console.log("☆☆");
  console.log(event);
  console.log("☆☆");
  cb(null, { message: 'Go Serverless v1.0! Your function executed successfully!', hoge1: event.key1 });
};

// You can add more handlers here, and reference them in serverless.yml
