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
 * Save a user.manager in database
 *
 * @param data - Data from user to be saved
 * @param file - User avatar file, if exists
 * @param callback - First param: err, in case of error; Second param: the saved record
 */
module.exports.save = (data, file, callback) => {

    if (typeof file === 'function') {
        callback = file;
    }

    try {
        let manager = new Manager(data.name, data.email, data.password, data.cpf);

        if (data.address) {
            setUserAddress(manager, data.address);
        }
        //If file exists and it's an image
        if (file && typeof file !== 'function') {
            delete data.password;
            const metadata = {...data};
            UserModel.saveAvatar(file, metadata, (err, avatar) => {
                if (err) {
                    return callback(err);
                }
                manager.setAvatar(avatar._id);
                UserModel.save(manager.getDatabaseDoc(), callback);
            })

        } else {
            UserModel.save(manager.getDatabaseDoc(), callback);
        }
    } catch (err) {
        return callback(err);
    }
};

/**
 * Set user address
 *
 * @param manager
 * @param address
 */
let setUserAddress = (manager, address) => {
    // let userAddress = {
    //     street: address.street,
    //     city: address.city,
    //     state: address.state,
    //     postal: address.postal
    // };
    manager.setAddress(address);
};

/**
 * Find an user, given an email address
 *
 * @param query - Search query
 * @param callback
 */
module.exports.findOne = (query, callback) =>{
    UserModel.findOne(query, callback);
};

/**
 * Updates a user.manager
 *
 * @param query - Search query
 * @param data - HTTP body - User fields to update;
 * @param options
 * @param callback
 */
module.exports.update = (query, data, options, callback) => {
    UserModel.update(query, data, options, callback);
};

/**
 * Delete a user.manager
 *
 * @param query - Search query
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
