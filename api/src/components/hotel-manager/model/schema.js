/*
 * Module dependencies
 */
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import * as bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

let Schema = mongoose.Schema;

let ManagerDBModel = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        password: {
            type: String,
            required: true
        },
        is_active: {
            type: Boolean,
            default: true
        },
        is_manager: true,
        cpf: {
            type: String,
            unique: true
        },
        address: {
            street: String,
            city: String,
            state: String,
            postal: String
        },
        roles: [],
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date
        }
    },
    {collection: 'managers'});

/*
 Validator plugin for unique fields
 */
ManagerDBModel.plugin(uniqueValidator, {message: 'Error, expected {PATH} to be unique.'});

//Define a trigger for user password pre save
ManagerDBModel.pre('save', function (next) {
    let _this = this;

    if (!_this.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        "use strict";
        bcrypt.hash(_this.password, salt, function (err, hash) {
            if (err) {
                return next();
            }
            _this.salt = salt;
            _this.password = hash;
            next();
        });
    });
});


/*
 Define a static comparePassword method for User Schema
 */
ManagerDBModel.methods.comparePassword = function (plainText, callback) {
    let self = this;
    bcrypt.compare(plainText, self.password, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
};

ManagerDBModel = mongoose.model('Managers', UserDBModel);

export default ManagerDBModel;
