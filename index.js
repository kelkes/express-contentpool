var cryptor = require('./utils/cryptor.js');

module.exports = exports  = function(getUserName) {
	return {
		apiKey: '',	 
		login: function(req, res, next) {
			if (!req.cookies.contentPoolAuth) {
				var userToken = {
					username: getUserName(req),
					role: 'admin',
					contentBlockIds: [],
					apiKey: apiKey
				};
				var encryptedUserToken = cryptor.encrypt(JSON.stringify(userToken), userToken.apiKey);
				res.cookie('contentPoolAuth', encryptedUserToken);				
			}
			return next();
		},

		logout: function(req, res, next) {
			res.clearCookie('contentPoolAuth');
			return next();
		}
	};
};