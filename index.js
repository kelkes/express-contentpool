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
		login: function(req, res, userName) {
			if (!req.cookies.contentPoolAuth) {
				var userToken = this.generateUserToken();
				var encryptedUserToken = cryptor.encrypt(JSON.stringify(userToken), userToken.apiKey);
				res.cookie('contentPoolAuth', encryptedUserToken);
			}
		},
		logout: function(res) {
			res.clearCookie('contentPoolAuth');
		}
	};
};