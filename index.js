var cryptor = require('./utils/cryptor.js');

module.exports = exports = {
	apiKey: '',
	login: function(userName) {
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

	logout: function() {
		res.clearCookie('contentPoolAuth');
	}
};