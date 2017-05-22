'use strict';
/*
 Module dependencies
 */
import { constants }    from '../../../common/constants';
import { validateEmail }   from '../../../common/utils';


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
            exceptionMessage = constants.user.error.NAME_AND_EMAIL_REQUIRED;
        } else if (!this.name || !this.email) {
            exceptionMessage = !this.name ? constants.user.error.NAME_REQUIRED :constants.user.error.EMAIL_REQUIRED;
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
        if (!validateEmail(email)) {
            const message = constants.user.error.INVALID_EMAIL_ADDRESS;
            throw new UserValidationException(message);
        }
    }

}

export default User;
