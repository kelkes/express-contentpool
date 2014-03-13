var crypto = require('crypto'),
	algorithm = 'aes-128-cbc';

exports.decrypt = function(encryptedString, apiKey) {
	var initVector = encryptedString.substr(0,16);
	encryptedString = encryptedString.substr(16, encryptedString.length -16);
	var key = new Buffer(apiKey);	
	var encryptedBase64 = new Buffer(encryptedString, 'base64');
	var decipher = crypto.createDecipheriv(algorithm, key, new Buffer( initVector ) );
	var decoded = decipher.update(encryptedBase64, 'binary', 'ascii');
	decoded += decipher.final('ascii');
	return decoded;
};

exports.encrypt = function(string, apiKey) {
	var initVector = require('node-uuid')().replace(/-/g, '').substr(0,16);
	var key = new Buffer(apiKey);	
	var decryptedBuffer = new Buffer(string, 'ascii');
	var cipher = crypto.createCipheriv(algorithm, key, new Buffer( initVector ));
	var encoded = cipher.update(decryptedBuffer, 'ascii', 'base64');
	encoded += cipher.final('base64');
	return initVector + encoded;
};
