var contentpool = require('../index.js')('apiKey');
var userToken = contentpool.generateUserToken('username');
console.log(userToken);
