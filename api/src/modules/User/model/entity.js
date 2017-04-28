'use strict';
/*
 Module dependencies
 */
import UserDBCollection from './schema';
import constants from '../../../common/constants';
import * as utils from '../../../common/utils';


/**
 * User Validation Custom Exception
 * @param message
 * @constructor
 */
const UserValidationException = function (message) {
    this.message = message;
    this.name = 'UserValidationException';
};

/**
 * User class
 */
class User {
    
    /**
     * Constructor method
     * @param name
     * @param email
     */
    constructor(name, email) {
        this.name = name;
        this.email = email;

        this.validateRequiredFields();
        this.validateEmail();
    }

    setPassword(pass) {
        this.password = pass;
    }

    setIsActive(active) {
        this.isActive = active;
    }

    /**
     * Returns a new Mongoose Model User
     * @returns {*}
     */
    getDatabaseDoc() {
        let self = this;
        return new UserDBCollection({
            name: self.name,
            email: self.email,
            password: self.password,
            is_active: self.isActive,
            updated_at: Date.now()
        });
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