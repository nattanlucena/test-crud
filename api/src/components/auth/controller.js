"use strict";
/*
    Module dependencies
 */
import User from '../user/model';
import Manager from '../hotel-manager/model';
import * as tokenController from './token/controller';
import * as utils from '../../common/utils';
import * as constants from '../../common/constants';

/**
 * Sign in with email and password and returns a generated
 * token to be used in http header authorization field
 *
 * @param request - HTTP request
 * @param response - HTTP response
 * @returns {Object} - {data: user, token: token}
 */
module.exports.signIn = (request, response) => {

    let body = request.body;

    /*
        Checks if email and password are empty
     */
    if (!body.hasOwnProperty('email') && !body.hasOwnProperty('password')){
        const err = new Error(constants.auth.INVALID_EMAIL_OR_PASSWORD);
        return response.status(401).send(utils.handleError(err));
    }

    let type = body.type;

    //If its an user of app
    if (type === 'user') {
        return signInUser(body, response);
    }

    //If its a hotel manager
    if (type === 'manager') {
        return signInManager(body, response);
    }

};


/**
 * Method to signIn an user
 * @param body
 * @param response
 */
function signInUser(body, response) {
    let query = { email: body.email };
    User.findOne(query, (err, user) => {

        if (err) {
            return response.status(401).send(utils.handleError(err));
        }

        validateLogin(user, body.password, (err, user) => {
            if (err) {
                return response.status(401).send(utils.handleError(err));
            }

            generateToken(user, (err, result) => {
                if (err) {
                    return response.status(401).send(utils.handleError(err));
                }
                return response.json(result);
            });
        });
    });
}


/**
 * Method to signIn a manager
 *
 * @param body
 * @param response
 */
function signInManager(body, response) {

    let query = { email: body.email };
    Manager.findOne(query, (err, manager) => {
        if (err) {
            return response.status(401).send(utils.handleError(err));
        }
        validateLogin(manager, body.password, (err, manager) => {
            if (err) {
                return response.status(401).send(utils.handleError(err));
            }
            generateToken(manager, (err, result) => {
                if (err) {
                    return response.status(401).send(utils.handleError(err));
                }
                return response.json(result);
            });
        });
    });
}


/**
 * Generate the token and returns the token and the user
 *
 * @param user
 * @param callback
 * @returns {*}
 */
function generateToken(user, callback) {
    try {
        let payload = {
            id: user._id,
            name: user.name,
            email: user.email
        };
        let token = tokenController.createToken(payload);
        user._id = undefined;
        user.password = undefined;
        let result = {
            data: user,
            token: token
        };

        return callback(null, result);
    } catch (err) {
        return callback(err);
    }
}

/**
 * Validate an user to login
 *
 * @param user
 * @param plainPassword
 * @param callback
 */
function validateLogin(user, plainPassword, callback) {

    if (!user) {
        const err = new Error(constants.auth.INVALID_EMAIL_OR_PASSWORD);
        return callback(err);
    }

    //Checks if its an app user or a hotel manager
    if (!user.is_manager) {
        User.comparePassword(user, plainPassword, (err, isMatch) => {
            if (err) {
                return callback(err);
            }
            if (isMatch) {
                return callback(null, user);
            } else {
                const err = new Error(constants.auth.INVALID_EMAIL_OR_PASSWORD);
                return callback(err);
            }
        });
    } else {
        Manager.comparePassword(user, plainPassword, (err, isMatch) => {
            if (err) {
                return callback(err);
            }
            if (isMatch) {
                return callback(null, user);
            } else {
                const err = new Error(constants.auth.INVALID_EMAIL_OR_PASSWORD);
                return callback(err);
            }
        });
    }

}
