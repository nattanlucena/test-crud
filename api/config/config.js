import fs from 'fs';
import dotenv from 'dotenv';
import Logger from './logConfig';
import bunyan from 'bunyan';

const logger = Logger.logger;

let envConfig = process.env.NODE_ENV === 'production'
    ? dotenv.parse(fs.readFileSync('prod.env'))
    : process.env.NODE_ENV === 'development'
        ? dotenv.parse(fs.readFileSync('dev.env'))
        : dotenv.parse(fs.readFileSync('unit-tests.env'));

for (let key in envConfig) {
    if (envConfig.hasOwnProperty(key)) {
        process.env[key] = envConfig[key];
    }
}

const config = {

    API_BASE_PATH: '/api',

    PORT: process.env.PORT || 3000,
    HOSTNAME: process.env.HOSTNAME || 'localhost',

    DB_NAME: process.env.DB_NAME || 'default',
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
