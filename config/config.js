var fs = require('fs');
var dotenv = require('dotenv');
import Logger from './logConfig';
import bunyan from 'bunyan';

const logger = Logger.logger;

const envConfig = dotenv.parse(fs.readFileSync('.env'));

for( var key in envConfig) {
    if (envConfig.hasOwnProperty(key)) {
        process.env[key] = envConfig[key];
    }
}

const config = {

    PORT: process.env.PORT || 3000,
    HOSTNAME: process.env.HOSTNAME || 'localhost',
    API_BASE_PATH: '/api',
    DB_NAME: process.env.DB_NAME || 'defaultName',
    DB_HOST: process.env.DB_HOST || 'mongodb://127.0.0.1/',

    logger: {
        level: logger.level,
        enabled: logger.enabled
    },

    bunyan : {
        mute: !!bunyan.mute
    }
};

module.exports = config;
