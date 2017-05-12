'use strict';
/*
 Module dependencies
 */
import constants    from '../../../common/constants';
import * as utils   from '../../../common/utils';


/**
 * user Validation Custom Exception
 * @param message
 * @constructor
 */
const UserValidationException = function (message) {
    this.message = message;
    this.name = 'UserValidationException';
};

/**
 * user class
 */
class User {

    /**
     * Constructor method
     * @param name
     * @param email
     * @param password
     */
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.isActive = true;
    }

    /*
     Validate required fields
    */
    validateRequiredFields() {

        let exceptionMessage;
        if (!this.name && !this.email) {
            exceptionMessage = constants.user.NAME_AND_EMAIL_REQUIRED;
        } else if (!this.name || !this.email) {
            exceptionMessage = !this.name ? constants.user.NAME_REQUIRED : constants.user.EMAIL_REQUIRED;
        }

        if (exceptionMessage) {
            throw new UserValidationException(exceptionMessage);
        }
    }

    /*
     * Validate email address
     */
    validateEmail() {
        let email = this.email;
        if (!utils.validateEmail(email)) {
            const message = constants.user.INVALID_EMAIL_ADDRESS;
            throw new UserValidationException(message);
        }
    }

}

export default User;
