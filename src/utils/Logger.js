const bunyan = require('bunyan');
const name = 'logger';

var logger = bunyan.createLogger({
        name: name
});

module.exports = logger;