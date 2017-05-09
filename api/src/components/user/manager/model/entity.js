'use strict';
/*
 Module dependencies
 */
import User from '../../model/entity';
import UserType from '../../model/user-type';
import UserDBCollection from '../../model';
import constants from '../../../../common/constants';


/**
 * user Validation Custom Exception
 * @param message
 * @constructor
 */
const ManagerValidationException = function (message) {
    this.message = message;
    this.name = 'ManagerValidationException';
};

/**
 * user class
 */
class Manager extends User{

    /**
     * Constructor method
     * @param name
     * @param email
     * @param password
     * @param cpf
     * @param address
     */
    constructor(name, email, password, cpf, address) {
        super(name, email, password);

        this.cpf = cpf;
        this.address = address;
        this.type = UserType[1];

        this.validateFields();
    }

    setRoles (roles) {
        this.roles = roles;
    }

    setAvatar (avatar) {
        this.avatar = avatar;
    }

    /**
     * Returns a new Mongoose Model user
     * @returns {*}
     */
    getDatabaseDoc() {
        let self = this;
        let Collection = UserDBCollection.getCollectionInstance();
        return new Collection({
            name: self.name,
            email: self.email,
            password: self.password,
            cpf: self.cpf,
            address: self.address,
            type: self.type,
            roles: self.roles || [],
            is_active: self.isActive,
            avatar: self.avatar || undefined,
            updated_at: Date.now()
        });
    }


    validateFields() {
        super.validateEmail();

        //validate manager fields
        this.validateRequiredFields();
    }


    /*
      Validate required fields
     */
    validateRequiredFields() {

        //Validate user common fields
        super.validateRequiredFields();

        let exceptionMessage;
        if (!this.name && !this.email && !this.cpf && !this.address) {
            exceptionMessage = constants.manager.ALL_REQUIRED_FIELDS;
        } else  {
            // exceptionMessage = [];
            if (!this.cpf){
                exceptionMessage = constants.manager.CPF_REQUIRED;
            }
            /*
            if (!this.address){
                exceptionMessage.push(constants.manager.ADDRESS_REQUIRED);
            }
            */
        }
        if (exceptionMessage) {
            throw new ManagerValidationException(exceptionMessage);
        }
    }
}

export default Manager;
