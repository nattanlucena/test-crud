"use strict";
/*
 Module dependencies
 */
//import logger from './Logger';
import * as Log from './log';


/**
 * Manipulate errors to be returned in http response
 * @param error
 * @returns {*}
 */
function handleError(error) {
    logError(error);

    if (error instanceof Error) {
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
    } else {
        return {error: error};
    }
}
module.exports.handleError = handleError;

/**
 * Manipulate messages to be returned in http response
 * @param msg
 * @returns {*}
 */
function handleMessage(msg) {
    return {message: msg};
}
module.exports.handleMessage = handleMessage;

/**
 * Manipulate messages to be returned in http response
 * @param data
 * @returns {*}
 */
module.exports.handleData = (data) => {
    return {data: data};
};

/**
 * Print the error message in console
 * @param error
 */
function logError(error) {
    if (process.env.NODE_ENV === 'development') {
        Log.error(error);
    }
}
module.exports.logError = logError;

/**
 * Print the info message in console
 * @param message
 */
function logInfo(message) {
    if (process.env.NODE_ENV === 'development') {
        Log.info(message);
    }
}
module.exports.logInfo = logInfo;

/**
 * Print the debug message in console
 * @param message
 */
function logDebug(message) {
    if (process.env.NODE_ENV === 'development') {
        Log.debug(message);
    }
}
module.exports.logDebug = logDebug;

/**
 * Print the debug message in console
 * @param message
 */
function logWarn(message) {
    if (process.env.NODE_ENV === 'development') {
        Log.warn(message);
    }
}
module.exports.logWarn = logWarn;

/**
 *  Validate email address function. If matchs, it returns true. If not, returns false
 *
 * @param email
 * @returns {boolean}
 */
function validateEmail(email) {
    const EMAIL_REGEX = '^[a-zA-Z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    let regex = new RegExp(EMAIL_REGEX);

    return regex.test(email);
}
module.exports.validateEmail = validateEmail;
