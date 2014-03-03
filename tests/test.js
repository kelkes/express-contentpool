var contentpool = require('../index.js')('cf447959f2751027');
var userToken = contentpool.generateUserToken('username');
console.log(userToken);
var encryptedUserToken = contentpool.encryptUserToken(userToken);
console.log(encryptedUserToken);
var decryptedUserToken =  contentpool.decryptUserToken(encryptedUserToken);
console.log(decryptedUserToken);
