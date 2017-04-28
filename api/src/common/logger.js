const bunyan = require('bunyan');
const name = 'logger';

let logger = bunyan.createLogger({
        name: name
});

module.exports = logger;