exports.JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET : "a not so secret secret";
exports.JWT_OPTIONS = {
	audience: 'http://myapi/',
	issuer: 'http://myapi/',
	expiresInMinutes: 60*24
};