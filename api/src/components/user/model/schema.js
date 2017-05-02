/*
 * Module dependencies
 */
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import * as bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

let Schema = mongoose.Schema;

let UserDBModel = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        is_active: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            index: true,
            default: 'app'
        },
        cpf: {
            type: String,
            unique: true,
            index: true
        },
        address: {
            street: String,
            city: String,
            state: String,
            postal: String
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date
        }
    });

/*
 Validator plugin for unique fields
 */
UserDBModel.plugin(uniqueValidator, {message: 'Error, expected {PATH} to be unique.'});

//Define a trigger for user password pre save
UserDBModel.pre('save', function (next) {
    let self = this;

    if (!self.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        "use strict";
        bcrypt.hash(self.password, salt, function (err, hash) {
            if (err) {
                return next();
            }
            self.salt = salt;
            self.password = hash;
            next();
        });
    });
});


/*
 Define a static comparePassword method for User Schema
 */
UserDBModel.methods.comparePassword = function (plainText, callback) {
    let self = this;
    bcrypt.compare(plainText, self.password, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
};

UserDBModel = mongoose.model('users', UserDBModel);

export default UserDBModel;
