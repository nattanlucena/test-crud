'use strict';
/*
 Module dependencies
 */
import UserDBCollection from './schema';
import constants from '../../utils/Constants';

const EMAIL_REGEX = '^[a-zA-Z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

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
     * Validate email with regex
     */
    validateEmail() {
        let email = this.email;
        let regex = new RegExp(EMAIL_REGEX);
        if (!regex.test(email)) {
            const message = constants.user.INVALID_EMAIL_ADDRESS;
            throw new UserValidationException(message);
        }
    }

}

export default User;