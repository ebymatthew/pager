exports.JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET : "G6dotGDhu6G5EKLwcuK5JykTi8foQXxWH9G1xGdJ";
exports.JWT_OPTIONS = {
	audience: 'http://myapi/',
	issuer: 'http://myapi/',
	expiresInMinutes: 60*24
};