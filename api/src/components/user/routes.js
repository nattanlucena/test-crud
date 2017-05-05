/*
    Module dependencies
 */
import * as config from '../../../config/config';
import * as appUserController from './app/controller';
import * as managerController from './manager/controller';

const APP_USER_BASE_PATH = config.APP_BASE_PATH + '/users/';
const MANAGER_USER_BASE_PATH = config.MANAGER_BASE_PATH + '/users/';
const ADMIN_USER_BASE_PATH = config.ADMIN_BASE_PATH + '/users/';


/**
 * Set user Module routes
 *
 * @param app
 */
function setUserRoutes(app) {

    ////////////////////////////////
    //app routes
    ////////////////////////////////

    app.get(APP_USER_BASE_PATH, appUserController.getUsers);

    app.get(APP_USER_BASE_PATH + 'id/:id', appUserController.findById);

    app.get(APP_USER_BASE_PATH + 'email/:email', appUserController.findByEmail);

    app.post(APP_USER_BASE_PATH, appUserController.saveUser);

    app.put(APP_USER_BASE_PATH + ':email', appUserController.updateUser);

    app.delete(APP_USER_BASE_PATH + ':email', appUserController.removeUserByEmail);


    ////////////////////////////////
    //manager routes
    ////////////////////////////////

    app.get(MANAGER_USER_BASE_PATH, managerController.getManagers);

    app.get(MANAGER_USER_BASE_PATH + 'id/:id', managerController.findById);

    app.get(MANAGER_USER_BASE_PATH + 'email/:email', managerController.findByEmail);

    app.post(MANAGER_USER_BASE_PATH, managerController.saveManager);

    app.put(MANAGER_USER_BASE_PATH + ':email', managerController.updateManager);

    app.delete(MANAGER_USER_BASE_PATH + ':email', managerController.removeManagerByEmail);

    ////////////////////////////////
    //admin routes
    ////////////////////////////////

}

module.exports = setUserRoutes;