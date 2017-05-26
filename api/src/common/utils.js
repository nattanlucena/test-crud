"use strict";
/*
 Module dependencies
 */
import * as Log from './log';


/**
 * Manipulate errors to be returned in http response
 * @param error
 * @returns {*}
 */
export const handleError = (error) => {
    logError(error);

    if (!(error instanceof Error)) {
        const has = Object.prototype.hasOwnProperty;
        if ( (has.call(error, 'code') && has.call(error, 'message'))) {
            return { error: {code: error.code , message: error.message }  };
        } else {
            return { error: error.message  };
        }
    }

    if ( !error.errors) {
        return { error: error.message };
    }

    let errorMessages = {};
    for (let key in error.errors) {
        if (error.errors.hasOwnProperty(key)) {
            errorMessages[key] = error.errors[key].message;
        }
    }

    return { error: errorMessages };
};

/**
 * Manipulate messages to be returned in http response
 * @param msg
 * @returns {*}
 */
export const handleMessage = (msg) => ({message: msg});

/**
 * Manipulate messages to be returned in http response
 * @param data
 * @returns {*}
 */
export const handleData = (data) => ({data: data});

/**
 * Print the error message in console
 * @param error
 */
export const logError = (error) => {
    if (process.env.NODE_ENV === 'development') {
        Log.error(error);
    }
};

/**
 * Print the info message in console
 * @param message
 */
export const logInfo = (message) => {
    if (process.env.NODE_ENV === 'development') {
        Log.info(message);
    }
};

/**
 * Print the debug message in console
 * @param message
 */
export const logDebug = (message) => {
    if (process.env.NODE_ENV === 'development') {
        Log.debug(message);
    }
};

/**
 * Print the debug message in console
 * @param message
 */
export const logWarn = (message) =>{
    if (process.env.NODE_ENV === 'development') {
        Log.warn(message);
    }
};

/**
 *  Validate email address function. If matchs, it returns true. If not, returns false
 *
 * @param email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
    const EMAIL_REGEX = '^[a-zA-Z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    let regex = new RegExp(EMAIL_REGEX);

    return regex.test(email);
};

/**
 * Generate query filter
 *
 * @param params
 * @returns {{}}
 */
export const queryFilter = (params) => {
    let filter = {};

    if ( !(typeof params === 'object')) {
        if (params.id) {
            filter._id = params;
        } else {
            filter[params] = params;
        }
    } else {
        if (Object.keys(params).length) {
            Object.keys(params).forEach((key) => {
                if (key === 'id')  {
                    filter['_id'] = params[key];
                } else {
                    filter[key] = params[key];
                }
            });
        }
    }

    return filter;
};
