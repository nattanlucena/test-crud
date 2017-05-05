"use strict";
/*
 * Module dependencies
 */
import UserModel from '../../model/';
import Manager from './entity';


/**
 *  Get all users from database
 *  Returns a callback with two params: err and users
 *
 * @param query - Search query
 * @param options
 * @param callback - First param: err, in case of error; Second param: records from DB
 */
module.exports.fetch = (query, options, callback) => {
    UserModel.fetch(query, options, callback);
};

/**
 * Save a manager in database
 *
 * @param data - Data from user to be saved
 * @param callback - First param: err, in case of error; Second param: the saved record
 */
module.exports.save = (data, callback) => {
    try {
        let address;
        if (data.address) {
            address = {
                street: data.street,
                city: data.city,
                state: data.state,
                postal: data.postal
            };
        }
        let manager = new Manager(data.name, data.email, data.password, data.cpf, address);
        UserModel.save(manager.getDatabaseDoc(), callback);
    } catch (err) {
        return callback(err);
    }
};

/**
 * Find an user, given an email address
 *
 * @param query
 * @param callback
 */
module.exports.findOne = (query, callback) =>{
    UserModel.findOne(query, callback);
};

/**
 * Updates a manager
 *
 * @param query
 * @param data - user fields to update
 * @param callback
 */
module.exports.update = (query, data, options, callback) => {
    UserModel.update(query, data, options, callback);
};

/**
 * Delete a manager
 *
 * @param query
 * @param callback
 */
module.exports.remove = (query, callback) => {
    UserModel.remove(query, callback);
};

/**
 * Checks if password matchs
 *
 * @param manager
 * @param plainText
 * @param callback
 */
module.exports.comparePassword = (manager, plainText, callback) => {
    UserModel.comparePassword(plainText, callback);
};