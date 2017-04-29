'use strict';
/*
 Module dependencies
 */
import ManagerDBCollection from './schema';
import constants from '../../../common/constants';
import * as utils from '../../../common/utils';


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
class Manager {

    /**
     * Constructor method
     * @param name
     * @param email
     * @param cpf
     * @param address
     */
    constructor(name, email, cpf, address) {

        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.address = address;

        this.validateRequiredFields();
        this.validateEmail();
    }

    setPassword(pass) {
        this.password = pass;
    }

    setIsActive(active) {
        this.isActive = active;
    }

    setRoles (roles) {
        this.roles = roles;
    }

    /**
     * Returns a new Mongoose Model user
     * @returns {*}
     */
    getDatabaseDoc() {
        let self = this;
        return new ManagerDBCollection({
            name: self.name,
            email: self.email,
            password: self.password,
            cpf: self.cpf,
            address: self.address,
            roles: self.roles,
            is_active: self.isActive,
            updated_at: Date.now()
        });
    }

    /*
     Validate required fields
     */
    validateRequiredFields() {
        let exceptionMessage;
        if (!this.name && !this.email && !this.cpf && !this.address) {
            exceptionMessage = constants.manager.ALL_REQUIRED_FIELDS;
        } else  {
            exceptionMessage = [];
            if (!this.name) {
                exceptionMessage.push(constants.manager.NAME_REQUIRED);
            }
            if (!this.email){
                exceptionMessage.push(constants.manager.EMAIL_REQUIRED);
            }
            if (!this.cpf){
                exceptionMessage.push(constants.manager.CPF_REQUIRED);
            }
            if (!this.address){
                exceptionMessage.push(constants.manager.ADDRESS_REQUIRED);
            }
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

export default Manager;
