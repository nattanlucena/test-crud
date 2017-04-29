"use strict";
/*
 * Module dependencies
 */
import ManagerDBCollection from './schema';
import Manager from './entity';


/**
 *  Get all users from database
 *  Returns a callback with two params: err and users
 *
 * @param callback - First param: err, in case of error; Second param: records from DB
 */
module.exports.fetch = (callback) => {
    ManagerDBCollection.find({}, {__v:0, created_at:0}).lean().exec(callback);
};

/**
 * Save a manager in database
 *
 * @param data - Data from user to be saved
 * @param callback - First param: err, in case of error; Second param: the saved record
 */
module.exports.save = (data, callback) => {
    try {
        let address = {
            street: data.street,
            city: data.city,
            state: data.state,
            postal: data.postal
        };
        let manager = new Manager(data.name, data.email, data.cpf, address);

        if (data.password) {
            manager.setPassword(data.password);
        }
        if (data.isActive !== undefined) {
            manager.setIsActive(data.isActive);
        }

        manager.getDatabaseDoc().save(callback);

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
    ManagerDBCollection.findOne(query, {__v: 0}).exec(callback);
};

/**
 * Updates an user, given an id
 *
 * @param query
 * @param data - user fields to update
 * @param callback
 */
module.exports.update = (query, data, callback) => {
    let options = {
        new: true, //return the modified document
        runValidators: true, //run the unique validator plugin
        context: 'query'
    };
    let updateFields = {};

    if (data.name) {
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

    ManagerDBCollection.findOneAndUpdate(query, updateFields, options, callback);
};

/**
 * Delete an user
 *
 * @param query
 * @param callback
 */
module.exports.remove = (query, callback) => {
    ManagerDBCollection.findOneAndRemove(query, callback);
};

/**
 * Checks if password matchs
 *
 * @param manager
 * @param plainText
 * @param callback
 */
module.exports.comparePassword = (manager, plainText, callback) => {
    manager.comparePassword(plainText, callback);
};
