var contentpoolFactory = require('../index.js');

console.log(contentpoolFactory);

var getUserName = function(req) { return "test"};

var contentpool = contentpoolFactory(getUserName);

contentpool.apiKey = 'apiKey';

console.log(contentpool.apiKey);
