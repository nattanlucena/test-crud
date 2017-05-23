"use strict";
/*
 Module dependencies
 */
import { User, Manager }    from '../user';
import * as tokenController from './token/controller';
import * as utils           from '../../common/utils';
import { constants }        from '../../common/constants';

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
     * Checks if email and password are empty
     */
    if (!body.hasOwnProperty('email') || !body.hasOwnProperty('password')) {
        return response.status(401)
            .send(utils.handleError(constants.auth.error.INVALID_EMAIL_OR_PASSWORD));
    }

    let query = {email: body.email};

    User.findOne(query, (err, user) => {
        if (err) {
            return response.status(401).send(utils.handleError(err));
        }

        validateUser(user, body.password, (err, user) => {
            if (err) {
                return response.status(401).send(utils.handleError(err));
            }

            generateToken(user, (err, token) => {
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
            })
        });
    });
};

/**
 * Create an user.manager in sing up and returns the token to the user be logged in
 *
 * @param request
 * @param response
 */
module.exports.signUp = (request, response) => {
    utils.logInfo('HTTP request :: signUp method');

    let body = request.body;
    Manager.save(body, (err, manager) => {

        if (err) {
            return response.status(401).send(utils.handleError(err));
        }

        generateToken(manager, (err, token) => {
            if (err) {
                return response.status(401).send(utils.handleError(err));
            }
            manager._id = undefined;
            manager.password = undefined;
            manager.salt = undefined;
            let result = {
                data: manager,
                token: token
            };
            return response.json(result);
        });
    });
};


/**
 * Verify if user's token is valid
 *
 * @param passport
 */
module.exports.isAuthenticated = (passport) => {
    return tokenController.authenticateToken(passport);
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
        return callback(constants.auth.error.INVALID_EMAIL_OR_PASSWORD);
    }

    User.comparePassword(user, plainPassword, (err, isMatch) => {
        if (err) {
            return callback(err);
        }
        if (isMatch) {
            return callback(null, user);
        } else {
            return callback(constants.auth.error.INVALID_EMAIL_OR_PASSWORD);
        }
    });
}

/**
 * Generate token and returns the token and the user to http response
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
            email: user.email,
            type: user.type,
            date: Date.now()
        };
        let token = tokenController.createToken(payload);

        return callback(null, token);
    } catch (err) {
        return callback(err);
    }
}
