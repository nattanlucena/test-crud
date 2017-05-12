import bunyan from 'bunyan';
const name = 'logger';

let logger = bunyan.createLogger({
        name: name
});

module.exports = logger;
