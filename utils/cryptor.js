var crypto = require('crypto'),
	algorithm = 'aes-128-cbc',
	initVector = new Buffer('triGoContentPool');

exports.encrypt = function(string, apiKey) {
	var key = new Buffer(apiKey);	
	var decryptedBuffer = new Buffer(string, 'ascii');
	var cipher = crypto.createCipheriv(algorithm, key, initVector);
	var encoded = cipher.update(decryptedBuffer, 'ascii', 'base64');
	encoded += cipher.final('base64');
	return encoded;
}