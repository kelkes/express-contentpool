var cryptor = require('./utils/cryptor.js'),
	express = require('express');

module.exports = exports = function(apiKey) {
	return {
		_apiKey: apiKey,
		generateUserToken: function(userName) {
			return {
				username: userName,
				role: 'admin',
				contentBlockIds: [],
				apiKey: this._apiKey
			};
		},
		encryptUserToken: function(userToken) {
			return cryptor.encrypt(JSON.stringify(userToken), userToken.apiKey);
		},
		decryptUserToken: function(userToken) {
			console.log(this._apiKey);
			return JSON.parse(cryptor.decrypt(userToken, this._apiKey));
		},
		login: function(req, res, userName) {
			if (!req.cookies.contentPoolAuth) {
				var userToken = this.generateUserToken(userName);
				var encryptedUserToken = this.encryptUserToken(userToken);
				res.cookie('contentPoolAuth', encryptedUserToken, {
					signed: false
				});
			}
		},
		logout: function(res) {
			res.clearCookie('contentPoolAuth');
		}
	};
};