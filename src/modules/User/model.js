"use strict";
/*
 * Module dependencies
 */
import UserDBCollection from './schema';
import User from './entity';

module.exports = {
    fetch: fetch,
    save: save,
    findOne: findOne,
    update: update,
    remove: remove
};

/**
 *  Get all users from database
 *  Returns a callback with two params: err and users
 *
 * @param callback - First param: err, in case of error; Second param: records from DB
 */
function fetch(callback) {
    UserDBCollection.find({}, {__v:0, created_at:0}, callback);
}

/**
 * Save an user in database
 *
 * @param data - Data from user to be saved
 * @param callback - First param: err, in case of error; Second param: the saved record
 */
function save(data, callback) {
    try {
        let user = new User(data.name, data.email);

        if (data.password) {
            user.setPassword(data.password);
        }
        if (data.isActive !== undefined) {
            user.setIsActive(data.isActive);
        }

        user.getDatabaseDoc().save(callback);

    } catch (err) {
        return callback(err);
    }
}

/**
 * Find an user, given an email address
 *
 * @param query - User id
 * @param callback
 */
function findOne(query, callback) {
    UserDBCollection.findOne(query, {password: 0, __v: 0}, callback);
}

/**
 * Updates an user, given an id
 *
 * @param query
 * @param data - User fields to update
 * @param callback
 */
function update(query, data, callback) {
    let options = {
        new: true, //return the modified document
        runValidators: true, //run the unique validator plugin
        context: 'query'
    };
    let updateFields = {};

    if(data.name) {
        updateFields.name = data.name;
    }
    if (data.email) {
        updateFields.email = data.email;
    }
    if (data.password) {
        updateFields.password = data.password;
    }
    if (data.isActive !== undefined) {
        updateFields.is_active = data.isActive;
    }

    UserDBCollection.findOneAndUpdate(query, updateFields, options, callback);
}

/**
 * Delete an user
 *
 * @param query
 * @param callback
 */
function remove(query, callback) {
    UserDBCollection.findOneAndRemove(query, callback);
}
