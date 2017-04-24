/*
    Module dependencies
 */
import * as config from '../../../config/config';
import * as controller from './controller';

const API_BASE_PATH = config.API_BASE_PATH;
const USER_BASE_PATH = API_BASE_PATH + '/users/';


/**
 * Set User Module routes
 *
 * @param app
 */
function setUserRoutes(app) {

    //route for get all users
    app.get(USER_BASE_PATH, controller.getUsers);

    //route for get an user, given an ID
    app.get(USER_BASE_PATH + ':id', controller.findById);

    //route for get an user, given an email address
    app.get(USER_BASE_PATH + ':email', controller.findByEmail);

    //route for create a new user
    app.post(USER_BASE_PATH, controller.saveUser);

    //route for update an user
    app.put(USER_BASE_PATH + ':email', controller.updateUser);

    //route for delete an user
    app.delete(USER_BASE_PATH + ':email', controller.removeUser);

}

module.exports = setUserRoutes;