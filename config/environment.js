const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/mystery-${env}`;
const secret = process.env.SECRET || 'wooo, mysteries';
module.exports = { port, env, dbURI, secret };
