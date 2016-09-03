'use strict';

var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();

// Your first function handler
module.exports.hello = (event, context, cb) => {
  dynamo.scan({TableName : "my-first-serverless"}, function(err, data) {
    if (err) {
      console.log(err); // エラー時
    } else {
      console.log("☆☆");
      console.log(event);
      console.log(data);
      console.log("☆☆");
      cb(null, { message: 'Go Serverless v1.0! Your function executed successfully!', hoge1: event.key1, dynamo: data });
    }
  });
};

module.exports.insert = (event, context, cb) => {
  console.log("☆☆");
  console.log(event);
  console.log("☆☆");
  cb(null, { message: 'Success' });
};
