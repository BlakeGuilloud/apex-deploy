const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

exports.handle = function(e, ctx, cb) {
  const params = {
    Item: {
      date: Date.now(),
      message: e.data.message
    },
    TableName: 'guestbook'
  };

  docClient.put(params, cb);
}
