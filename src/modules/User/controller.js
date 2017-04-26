//https://developer.github.com/v3/
'use strict';

/*
 * Module dependencies
 */
import * as model from './model';
import * as utils from '../../utils/utils';
import * as constants from '../../utils/constants';


/**
 * Fetch all users from database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.getUsers = (request, response) => {
    utils.logInfo('HTTP Request :: getUsers function');

    model.fetch((err, users) => {
        if (err) {
            return response.status(500).json(utils.handleError(err));
        } else {
            return response.json({data: users});
        }
    });
};

/**
 * Save an user in database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.saveUser = (request, response) => {
    utils.logInfo('HTTP Request :: saveUser function');
    console.log(request.body);
    model.save(request.body, (err, user) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.status(201).json(utils.handleData(user));
        }
    });
};

/**
 * Returns the user by their id
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.findById = (request, response) => {
    utils.logInfo('HTTP Request :: findById function');

    let id = request.params.id;
    let query = { _id: id };
    model.findOne(query, (err, user) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.json(utils.handleData(user));
        }
    });
};

/**
 * Returns the user by their email
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.findByEmail = (request, response) => {
    utils.logInfo('HTTP Request :: findByEmail function');

    let email = request.params.email;
    let query = {email: email};
    model.findOne(query, (err, user) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.json(utils.handleData(user));
        }
    });
};

/**
 *  Returns the updated user with the new values
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.updateUser = (request, response) => {
    utils.logInfo('HTTP Request :: updateUser function');

    let email = request.params.email;
    let query = { email: email };
    model.update(query, request.body, (err, updated) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.json(utils.handleData(updated));
        }
    });
};

/**
 * Remove an user by their id
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.removeUserById = (request, response) => {
    utils.logInfo('HTTP Request :: remove function');

    let id = request.params.id;
    let query = { _id: id };
    model.remove(query, (err, result) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else if (result){
            //Returns an empty json and http response status code 204
            return response.status(204).json({});
        } else {
            const msg = constants.user.USER_NOT_FOUND;
            return response.status(404).json(utils.handleMessage(msg));
        }
    });
};

/**
 * Remove an user by their email address
 *
 * @param request - HTTP request
 * @param response - HTTP response
*/
module.exports.removeUserByEmail = (request, response) => {
    utils.logInfo('HTTP Request :: removeUserByEmail function');

    let email = request.params.email;
    let query = { email: email };
    model.remove(query, (err, result) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else if (result){
            //Returns an empty json and http response status code 204
            return response.status(204).json({});
        } else {
            const msg = constants.user.USER_NOT_FOUND;
            return response.status(404).json(utils.handleMessage(msg));
        }
    });
};