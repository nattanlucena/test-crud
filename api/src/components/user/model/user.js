"use strict";
/*
 * Module dependencies
 */
import Collection from './schema';


/**
 * Returns the user collection instance to be used to create custom queries
 *
 * @returns {Collection}
 */
module.exports.getCollectionInstance = () => {
    return Collection;
};

/**
 *  Get all users from database.
 *  Returns a callback with two params: err and users
 *
 * @param query - Search query
 * @param options - query options
 * @param callback - First param: err, in case of error; Second param: records from DB
 */
module.exports.fetch = (query, options, callback) => {
    let qry = query || {};
    let localOptions = { __v: 0, password: 0 };
    if (typeof options === 'function') {
        callback = options;
    } else {
        localOptions = options ? Object.assign({}, localOptions, options) : localOptions;
    }
    Collection.find(qry, localOptions).lean().exec(callback);
};

/**
 * Save an user in database
 *
 * @param user - User to be saved
 * @param callback - First param: err, in case of error; Second param: the saved record
 */
module.exports.save = (user, callback) => {
    user.save({password: 0, __v: 0}, callback);
};

/**
 * Find an user, given an email address
 *
 * @param query
 * @param options - query options
 * @param callback
 */
module.exports.findOne = (query, options, callback) =>{
    let localOptions = {__v: 0};
    if (typeof options === 'function') {
        callback = options;
    } else {
        localOptions = options ? Object.assign({}, localOptions, options) : localOptions;
    }
    Collection.findOne(query, localOptions).exec(callback);
};

/**
 * Updates an user, given an id
 *
 * @param query
 * @param data - user fields to update
 * @param options - query options
 * @param callback
 */
module.exports.update = (query, data, options, callback) => {

    let updateFields = {};
    //Default options
    let localOptions = {
        new: true, //return the modified document
        runValidators: true, //run the unique validator plugin
        context: 'query'
    };

    if (typeof options === 'function') {
        callback = options;
    } else {
        //Add options in default localOptions object
        localOptions = options ? Object.assign({}, localOptions, options) : localOptions;
    }

    //Update fields
    Object.keys(data).forEach( (key) => {
        updateFields[key] = data[key];
    });

    Collection.findOneAndUpdate(query, updateFields, localOptions, callback);
};

/**
 * Delete an user
 *
 * @param query
 * @param callback
 */
module.exports.remove = (query, callback) => {
    Collection.findOneAndRemove(query, callback);
};

/**
 * Checks if password matchs
 *
 * @param user
 * @param plainText
 * @param callback
 */
module.exports.comparePassword = (user, plainText, callback) => {
    user.comparePassword(plainText, callback);
};
