"use strict";
/*
 * Module dependencies
 */
import UserModel from '../../model/';
import Manager from './entity';
import * as gridfs from '../../../../common/gridfs-config';
import * as utils from '../../../../common/utils';


/**
 *  Get all users from database
 *  Returns a callback with two params: err and users
 *
 * @param params - HTTP param
 * @param options
 * @param callback - First param: err, in case of error; Second param: records from DB
 */
module.exports.fetch = (params, options, callback) => {
    let query = utils.queryFilter(params);
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
            let address = {
                street: data.street,
                city: data.city,
                state: data.state,
                postal: data.postal
            };
            manager.setAddress(address);
        }

        //If file exists and it's an image
        if (file && typeof file !== 'function') {
            delete data.password; //remove password field from metadata

            //Save file on gridfs
            let writeStream = gridfs.writeStream(file, data);
            gridfs.readStream(file, writeStream);

            writeStream.on('close', (savedFile) => {
                //Remove file from temp directory
                gridfs.unlink(file, (err) => {
                    if (err) {
                        return callback(err);
                    }
                    manager.setAvatar(savedFile._id);
                });
            });
        } else {
            UserModel.save(manager.getDatabaseDoc(), callback);
        }
    } catch (err) {
        return callback(err);
    }
};

/**
 * Find an user, given an email address
 *
 * @param params - HTTP param
 * @param callback
 */
module.exports.findOne = (params, callback) =>{
    let query = utils.queryFilter(params);
    UserModel.findOne(query, callback);
};

/**
 * Updates a user.manager
 *
 * @param params - HTTP param
 * @param data - HTTP body - User fields to update;
 * @param options
 * @param callback
 */
module.exports.update = (params, data, options, callback) => {
    let query = utils.queryFilter(params);
    UserModel.update(query, data, options, callback);
};

/**
 * Delete a user.manager
 *
 * @param params - HTTP param
 * @param callback
 */
module.exports.remove = (params, callback) => {
    let query = utils.queryFilter(params);
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
