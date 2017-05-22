//https://developer.github.com/v3/
'use strict';

/*
 * Module dependencies
 */
import * as utils       from '../../common/utils';
import * as constants   from '../../common/constants';
import model            from './model/';


/**
 * Fetch all posts from database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.getPosts = (request, response) => {
    utils.logInfo('HTTP Request :: getPosts function');

    model.fetch((err, posts) => {
        if (err) {
            return response.status(500).json(utils.handleError(err));
        } else {
            return response.json({data: posts});
        }
    });
};

/**
 * Save a post in database
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.savePost = (request, response) => {
    utils.logInfo('HTTP Request :: savePost function');

    model.save(request.body, (err, post) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.status(201).json(utils.handleData(post));
        }
    });
};

/**
 * Returns the post by id
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.findById = (request, response) => {
    utils.logInfo('HTTP Request :: findById function');

    let id = request.params.id;
    let query = { _id: id };
    model.findOne(query, (err, post) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            return response.json(utils.handleData(post));
        }
    });
};

/**
 *  Returns the updated post with the new values
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.updatePost = (request, response) => {
    utils.logInfo('HTTP Request :: updatePost function');

    let id = request.params.id;
    let query = { _id: id };
    model.update(query, request.body, (err, updated) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else {
            if (!updated) {
                const err = constants.post.POST_NOT_FOUND;
                return response.status(404).json(utils.handleError(err));
            } else {
                return response.json(utils.handleData(updated));
            }
        }
    });
};

/**
 * Remove a post by id
 *
 * @param request - HTTP request
 * @param response - HTTP response
 */
module.exports.removePost = (request, response) => {
    utils.logInfo('HTTP Request :: removePost function');

    let id = request.params.id;
    let query = { _id: id };
    model.remove(query, (err, result) => {
        if (err) {
            return response.status(500).json(utils.handleError(err))
        } else if (!result){
            const err = constants.post.POST_NOT_FOUND;
            return response.status(404).json(utils.handleError(err));
        } else {
            //Returns an empty json and http response status code 204
            return response.status(204).json({});
        }
    });
};
