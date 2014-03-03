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

exports.decrypt = function(encryptedString, apiKey) {
	var key = new Buffer(apiKey);
	var encryptedBase64 = new Buffer(encryptedString, 'base64');
	var decipher = crypto.createDecipheriv(algorithm, key, initVector);
	var decoded = decipher.update(encryptedBase64, 'binary', 'ascii');
	decoded += decipher.final('ascii');
	return decoded;
}