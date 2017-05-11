/*
    Module dependencies
 */
import * as config from '../../../config/config';
import * as controller from './controller';

const POSTS_BASE_PATH = config.API_BASE_PATH + '/posts/';
const POST_BASE_PATH = config.API_BASE_PATH + '/post/';


/**
 * Set post Module routes
 *
 * @param app
 */
function setPostRoutes(app) {

    app.get(POSTS_BASE_PATH, controller.getPosts);

    app.get(POST_BASE_PATH + ':id', controller.findById);

    app.post(POST_BASE_PATH, controller.savePost);

    app.put(POST_BASE_PATH + ':id', controller.updatePost);

    app.delete(POST_BASE_PATH + ':id', controller.removePost);

}

module.exports = setPostRoutes;
