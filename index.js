var cryptor = require('../utils/cryptor.js');

exports.contentpool = function(getUserName) {
	return {
		apiKey: '',	 
		login: function(req, res, next) {
			if (!req.cookies.contentPoolAuth) {
				var userToken = {
					username: getUserName(),
					role: 'admin',
					contentBlockIds: [],
					apiKey: apiKey
				};
				var encryptedUserToken = cryptor.encrypt(JSON.stringify(userToken), userToken.apiKey);
				res.cookie('contentPoolAuth', encryptedUserToken);
			}
		},

		logout: function(req, res, next) {
			res.clearCookie('contentPoolAuth');
		};
	};
};