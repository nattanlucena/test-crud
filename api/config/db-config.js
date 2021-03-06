"use strict";
/*
    Module dependencies
 */
import mongoose from 'mongoose';

import * as config          from '../config/config';
import { logInfo, logError } from '../src/common/utils';

const DB_URI = config.DB_HOST + config.DB_NAME;

export const initDatabase = () => {
    mongoose.Promise = global.Promise;

    mongoose.connect(DB_URI);

    mongoose.connection.on('open', () =>  {
        // console.log(mongoose.connection)
        logInfo('Mongoose connected to ' + DB_URI);
    });

    // if the connection throws an error
    mongoose.connection.on('error', (err) =>  {
        logError('Mongoose connection error: ' + err);
    });

    // when the connection is disconnected
    mongoose.connection.on('disconnected', () =>  {
        logInfo('Mongoose disconnected');
    });

    // if the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
        mongoose.connection.close(() =>  {
            logError('Mongoose disconnected through user.app termination');
            process.exit(1);
        });
    });
};
