//https://developer.github.com/v3/
'use strict';

/*
 * Module dependencies
 */
import userType from '../model/user-type';
import model from './model/';
import * as utils from '../../../common/utils';
import * as constants from '../../../common/constants'
import * as gridfs from '../../../common/gridfs-config';


/**
 * Fetch all managers from database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.getManagers = (request, response) => {
    utils.logInfo('HTTP Request :: getUsers function');

    let params = { type: userType[1] };
    let options = {__v: 0, password: 0};
    model.fetch(params, options, (err, managers) => {
        if (err) {
            return response.status(500).json(utils.handleError(err));
        } else {
            return response.json(utils.handleData(managers));
        }
    });
};

/**
 * Fetch all active managers from database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.getActiveManagers = (request, response) => {
    utils.logInfo('HTTP Request :: getUsers function');

    let params = {type: userType[1], is_active: true};
    model.fetch(params, (err, managers) => {
        if (err) {
            return response.status(500).json(utils.handleError(err));
        } else {
            return response.json(utils.handleData(managers));
        }
    });
};

/**
 * Save an user in database
 *
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.saveManager = (request, response) => {
    utils.logInfo('HTTP Request :: saveUser function');

    gridfs.upload(request, response, (err) => {

        if (err) {
            return response.status(500).json(utils.handleError(err));
        }

        let file = request.file || undefined;
        model.save(request.body, file, (err, manager) => {
            if (err) {
                return response.status(500).json(utils.handleError(err))
            } else {
                manager.password = undefined;
                manager.salt = undefined;
                manager.__v = undefined;

                return response.status(201).json(utils.handleData(manager));
            }
        });
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

    model.findOne(request.params, (err, user) => {
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

    model.findOne(request.params, (err, user) => {
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
module.exports.updateManager = (request, response) => {
    utils.logInfo('HTTP Request :: updateManager function');

    model.update(request.params, request.body, (err, updated) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            if (!updated) {
                const err = constants.user.USER_NOT_FOUND;
                return response.status(404).json(utils.handleError(err));
            } else {
                return response.json(utils.handleData(updated));
            }
        }
    });
};

/**
 * Remove an user by their email address
 *
 * @param request - HTTP request
 * @param response - HTTP response
*/
module.exports.removeManagerByEmail = (request, response) => {
    utils.logInfo('HTTP Request :: removeManagerByEmail function');

    let params = request.params;
    model.remove(params, (err, result) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else if (!result){
            const err = constants.user.USER_NOT_FOUND;
            return response.status(404).json(utils.handleError(err));
        } else {
            //Returns an empty json and http response status code 204
            return response.status(204).json({});
        }
    });
};
