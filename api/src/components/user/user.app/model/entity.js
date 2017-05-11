'use strict';
/*
 Module dependencies
 */
import User from '../../model/entity';
import UserType from '../../model/user-type';
import UserDBCollection from '../../model';


/**
 * user Validation Custom Exception
 * @param message
 * @constructor
 */
const AppUserValidationException = function (message) {
    this.message = message;
    this.name = 'AppUserValidationException';
};

/**
 * user class
 */
class AppUser extends User{

    /**
     * Constructor method
     * @param name
     * @param email
     * @param password
     */
    constructor(name, email, password) {
        super(name, email, password);

        this.type = UserType[0];
        this.isActive = true;

        this.validateFields();
    }

    isActive(value) {
        this.isActive = value;
    }

    /**
     * Returns a new Mongoose Model user
     * @returns {*}
     */
    getDatabaseDoc() {
        let self = this;
        let Coll = UserDBCollection.getCollectionInstance();
        return new Coll({
            name: self.name,
            email: self.email,
            password: self.password,
            is_active: self.isActive,
            updated_at: Date.now()
        });
    }

    validateFields() {
        //Validate user common fields
        super.validateRequiredFields();
        super.validateEmail();
    }

}

export default AppUser;
