/*
    Module dependencies
 */
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import bunyan from 'bunyan';
import Logger from './logConfig';

const logger = Logger.logger;
const node_env = process.env.NODE_ENV;
const file = path.join(__dirname, '../env', `.env.${node_env}`);

//Load env vars
let envConfig = dotenv.parse(fs.readFileSync(file));
for (let key in envConfig) {
    if (envConfig.hasOwnProperty(key)) {
        process.env[key] = envConfig[key];
    }
}

/**
 *
 * Load project config setup
 *
 */
const config = {
    API_BASE_PATH: '/api',
    APP_BASE_PATH: '/api/user.app',
    MANAGER_BASE_PATH: '/api/user.manager',
    ADMIN_BASE_PATH: '/api/admin',

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
