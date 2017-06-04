const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

exports.handle = function(e, ctx, cb) {
  const params = {
    TableName: 'guestbook',
    Limit: 100
  };

  docClient.scan(params, cb);

  // const params = {
  //   TableName: 'guestbook',
  //   Key: {
  //     date: e.date
  //   }
  // }
  //
  // docClient.get(params, cb); // Returns only one item that matches the Key query.
}
