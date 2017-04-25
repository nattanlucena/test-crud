import fs from 'fs';
import dotenv from 'dotenv';
import Logger from './logConfig';
import bunyan from 'bunyan';

const logger = Logger.logger;

let envConfig = process.env.NODE_ENV === 'production'
    ? dotenv.parse(fs.readFileSync('prod.env'))
    : dotenv.parse(fs.readFileSync('dev.env'));

for (let key in envConfig) {
    if (envConfig.hasOwnProperty(key)) {
        process.env[key] = envConfig[key];
    }
} 
const config = {

    PORT: process.env.PORT || 3000,
    HOSTNAME: process.env.HOSTNAME || 'localhost',
    API_BASE_PATH: '/api',
    DB_NAME: process.env.TEST === 'false' ? process.env.DB_NAME : 'unit-tests',
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
