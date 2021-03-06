'use strict';

/*
 * Module dependencies
 */
import userType         from '../model/user-type';
import model            from './model/';
import * as utils       from '../../../common/utils';
import {constants}    from '../../../common/constants'
import * as gridfs      from '../../../common/gridfs-config';


/**
 * Fetch all managers from database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
export const getManagers = (request, response) => {
    utils.logInfo('HTTP Request :: getUsers function');

    let query = {type: userType[1]};
    let options = {__v: 0, password: 0, salt: 0};
    model.fetch(query, options, (err, managers) => {
        if (err) {
            return response.status(500).json(utils.handleError(err));
        }

        return response.json(utils.handleData(managers));
    });
};

/**
 * Fetch all active managers from database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
export const getActiveManagers = (request, response) => {
    utils.logInfo('HTTP Request :: getUsers function');

    let query = {type: userType[1], is_active: true};
    let options = {__v: 0, password: 0, salt: 0};
    model.fetch(query, options, (err, managers) => {
        if (err) {
            return response.status(500).json(utils.handleError(err));
        }

        return response.json(utils.handleData(managers));
    });
};

/**
 * Save an user in database
 *
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
export const saveManager = (request, response) => {
    utils.logInfo('HTTP Request :: saveUser function');

    gridfs.upload(request, response, (err) => {

        if (err) {
            return response.status(500).json(utils.handleError(err));
        }

        let file = request.file || undefined;

        model.save(request.body, file, (err, manager) => {
            if (err) {
                return response.status(500).json(utils.handleError(err))
            }

            manager.password = undefined;
            manager.salt = undefined;
            manager.__v = undefined;

            return response.status(201).json(utils.handleData(manager));

        });
    });
};

/**
 * Returns the user by their id
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
export const findById = (request, response) => {
    utils.logInfo('HTTP Request :: findById function');

    let query = {'_id': request.params.id};
    model.findOne(query, (err, user) => {

        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {

            if (!user) {
                return response.json(utils.handleData(user));
            }

            if (user.avatar) {
                findUserAvatar((err, avatar) => {
                    if (err) {
                        return response.status(500).json(utils.handleError(err))
                    }
                    //Load user avatar
                    return response.json(utils.handleData(user));
                });
            }

            return response.json(utils.handleData(user));
        }
    });
};


/**
 * Find the user's avatar
 * @param user
 * @param callback
 */
function findUserAvatar(user, callback) {
    gridfs.findAvatar(user.avatar, callback);
}


/**
 * Returns the user by their email
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
export const findByEmail = (request, response) => {
    utils.logInfo('HTTP Request :: findByEmail function');

    let query = {'email': request.params.email};
    model.findOne(query, (err, user) => {

        if (err) {
            return response.status(500).json(utils.handleError(err))
        }

        return response.json(utils.handleData(user));

    });
};

/**
 *  Returns the updated user with the new values
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
export const updateManager = (request, response) => {
    utils.logInfo('HTTP Request :: updateManager function');

    let query = {'email': request.params.email};
    model.update(query, request.body, (err, updated) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        }
        if (!updated) {
            return response.status(404).json(utils.handleError(constants.user.manager.error.MANAGER_NOT_FOUND));
        }

        return response.json(utils.handleData(updated));


    });
};

/**
 * Remove an user by their email address
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
export const removeManagerByEmail = (request, response) => {
    utils.logInfo('HTTP Request :: removeManagerByEmail function');

    let query = {'email': request.params.email};
    model.remove(query, (err, result) => {

        if (err) {
            return response.status(500).json(utils.handleError(err))
        }

        if (!result) {
            return response.status(404).json(utils.handleError(constants.user.manager.error.MANAGER_NOT_FOUND));
        }

        //Returns an empty json and http response status code 204
        return response.status(204).json({});

    });
};
