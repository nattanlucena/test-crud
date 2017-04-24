//https://developer.github.com/v3/
'use strict';

/*
 * Module dependencies
 */
import * as model from './model';
import * as utils from '../../utils/Utils';


/**
 * Fetch all users from database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.getUsers = function (request, response) {
    utils.logInfo("HTTP Request :: getUsers function");

    model.fetch((err, users) => {
        if (err) {
            return response.status(500).json(utils.handleError(err));
        } else {
            return response.json({users: users});
        }
    });
};

/**
 * Save an user in database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.saveUser = function (request, response) {
    utils.logInfo("HTTP Request :: saveUser function");

    model.save(request.body, (err, user) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.status(201).json({user: user});
        }
    });
};

/**
 * Returns the user by their id
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.findById = function (request, response) {
    utils.logInfo("HTTP Request :: findById function");

    var id = request.params.id;
    var query = {_id: id};
    model.findById(query, (err, user) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.json({data: user});
        }
    });
};

/**
 * Returns the user by their email
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.findByEmail = function (request, response) {
    utils.logInfo("HTTP Request :: findByEmail function");

    var email = request.params.email;
    var query = {email: email};
    model.findById(query, (err, user) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.json({data: user});
        }
    });
};

/**
 *  Returns the updated user with the new values
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.updateUser = function (request, response) {
    utils.logInfo("HTTP Request :: updateUser function");

    model.update(request.params.email, request.body, (err, updated) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.json({data: updated});
        }
    });
};

/**
 * Remove an user by their id
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.removeUser = function (request, response) {
    utils.logInfo("HTTP Request :: removeByEmail function");

    var id = request.params.id;
    model.remove(id, (err, result) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else if (result){
            //Returns an empty json and http response status code 204
            return response.status(204).json({});
        } else {
            return response.status(404).json({message: "User not found!"});
        }
    })

}