"use strict";
/*
    Module dependencies
 */
import passportJWT from 'passport-jwt';
import * as config from '../../../../config/config';
import {User} from '../../user/'

const ExtractJWT = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

module.exports.strategy = (passport) => {

    let options = {};
    options.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('Bearer');
    options.secretOrKey = config.secret.KEY;

    passport.use(new JwtStrategy(options, (payload, callback) => {
        let criteria = {_id: payload.id, email: payload.email, type: payload.type};
        let queryOptions = {'__v': 0, password: 0, created_at: 0, updated_at: 0};
        User.findOne(criteria, queryOptions, (err, user) => {
            if (err) {
                return callback(err);
            }

            if (!user) {
                return callback(null, false);
            } else {
                return callback(null, user);
            }
        });

    }));
};
