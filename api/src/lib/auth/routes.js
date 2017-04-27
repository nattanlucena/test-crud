/*
    Module dependencies
 */
import * as config from '../../../config/config';
import * as controller from './controller';

const API_BASE_PATH = config.API_BASE_PATH;
const USER_BASE_PATH = API_BASE_PATH + '/auth/';


/**
 * Set Auth Module routes
 *
 * @param app
 */
function setUserRoutes(app) {

    //route for get all users
    app.post(USER_BASE_PATH, controller.singIn);

}

module.exports = setUserRoutes;