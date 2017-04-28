"use strict";
/*
    Module dependencies
 */
import User from '../user/model';
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

    let query = { email: body.email };
    User.findOne(query, (err, user) => {

        if (err) {
            return response.status(401).send(utils.handleError(err));
        }

        validateUser(user, body.password, (err, user) => {
            if (err) {
                return response.status(401).send(utils.handleError(err));
            }

            let payload = {
                id: user._id,
                name: user.name,
                email: user.email
            };
            tokenController.createToken(payload, (err, token) => {
                if (err) {
                    return response.status(401).send(utils.handleError(err));
                }

                user._id = undefined;
                user.password = undefined;
                let result = {
                    data: user,
                    token: token
                };
                return response.json(result);
            });
        });
    });
};

/**
 * Validate an user to login
 *
 * @param user
 * @param plainPassword
 * @param callback
 */
function validateUser(user, plainPassword, callback) {

    if (!user) {
        const err = new Error(constants.auth.INVALID_EMAIL_OR_PASSWORD);
        return callback(err);
    }

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

}
