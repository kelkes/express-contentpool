var cryptor = require('./utils/cryptor.js'),
	express = require('express');

module.exports = exports = {
	apiKey: '',
	login: function(req, res, userName) {
		if (!req.cookies.contentPoolAuth) {
			var userToken = {
				username: userName,
				role: 'admin',
				contentBlockIds: [],
				apiKey: apiKey
			};
			var encryptedUserToken = cryptor.encrypt(JSON.stringify(userToken), userToken.apiKey);
			res.cookie('contentPoolAuth', encryptedUserToken);
		}
	},

	logout: function(res) {
		res.clearCookie('contentPoolAuth');
	}
};