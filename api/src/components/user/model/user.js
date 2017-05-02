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
 * @param callback - First param: err, in case of error; Second param: records from DB
 */
module.exports.fetch = (callback) => {
    Collection.find({}, { __v:0, password:0 }).lean().exec(callback);
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
 * @param callback
 */
module.exports.findOne = (query, callback) =>{
    Collection.findOne(query, {__v: 0}).exec(callback);
};

/**
 * Updates an user, given an id
 *
 * @param query
 * @param data - user fields to update
 * @param callback
 */
module.exports.update = (query, data, callback) => {
    let updateFields = {};
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            updateFields[key] = data[key];
        }
    }
    let options = {
        new: true, //return the modified document
        runValidators: true, //run the unique validator plugin
        context: 'query'
    };
    Collection.findOneAndUpdate(query, updateFields, options, callback);
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
