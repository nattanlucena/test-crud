"use strict";
/*
    Module dependencies
 */
//import logger from './Logger';
import * as Log from './Log';


/** *************************************************
 *                                                  *
 *          Project common functions                *
 *                                                  *
 ***************************************************/



/**
 * Manipulate errors to be returned in http response
 * @param error
 * @returns {*}
 */
module.exports.handleError = function (error) {
    this.logError(error);

    if (error.errors) {
        let errorMessages = {};
        for (let key in error.errors) {
            if (error.errors.hasOwnProperty(key)) {
                errorMessages[key] = error.errors[key].message;
            }
        }
        return {error: errorMessages}
    } else {
        return {error: error.message}
    }
};

/**
 * Print the error message in console
 * @param error
 */
module.exports.logError = function (error) {
    if (process.env.TEST !== "true") {
        Log.error(error);
    }
};

/**
 * Print the info message in console
 * @param message
 */
module.exports.logInfo = function (message) {
    if (process.env.TEST !== "true") {
        Log.info(message);
    }
};