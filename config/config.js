var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'example-nodejs'
    },
    port: 3000,
    db: 'mongodb://localhost/example-nodejs-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'example-nodejs'
    },
    port: 3000,
    db: 'mongodb://localhost/example-nodejs-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'example-nodejs'
    },
    port: 3000,
    db: 'mongodb://localhost/example-nodejs-production'
  }
};

module.exports = config[env];
