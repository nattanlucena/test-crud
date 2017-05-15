"use strict";
/*
    Module dependencies
 */
import mongoose from 'mongoose';
import * as config from '../config/config';

const DB_URI = config.DB_HOST + config.DB_NAME;

module.exports.initDatabase = () => {
    mongoose.Promise = global.Promise;

    mongoose.connect(DB_URI);

    mongoose.connection.on('open', () =>  {
        // console.log(mongoose.connection)
        console.log('Mongoose connected to ' + DB_URI);
    });

    // if the connection throws an error
    mongoose.connection.on('error', (err) =>  {
        console.log('Mongoose connection error: ' + err);
    });

    // when the connection is disconnected
    mongoose.connection.on('disconnected', () =>  {
        console.log('Mongoose disconnected');
    });

    // if the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
        mongoose.connection.close(() =>  {
            console.log('Mongoose disconnected through user.app termination');
            process.exit(1);
        });
    });
};
