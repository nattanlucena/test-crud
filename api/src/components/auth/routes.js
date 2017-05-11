import * as config from '../../../config/config';
import * as controller from './controller';

const API_BASE_PATH = config.API_BASE_PATH;
const AUTH_BASE_PATH = API_BASE_PATH + '/auth/';

/**
 * Set auth module routes
 *
 * @param app
 */
function setAuthRoutes(app) {
    app.post(AUTH_BASE_PATH, controller.signIn);

    //App user signup
    app.post(AUTH_BASE_PATH + 'manager/signup', controller.signUp);
}

module.exports = setAuthRoutes;
