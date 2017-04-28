"use strict";
/*
    Module dependencies
 */
import User from '../user/model';
import * as utils from '../../common/utils';
import * as constants from '../../common/constants';

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
            user.password = undefined;
            return response.json({ data: user });
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