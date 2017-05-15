"use strict";

import * as jwt from 'jsonwebtoken';
import * as config from '../../../../config/config';

module.exports.createToken = (payload) => {
    let secret = config.secret.KEY;
    return jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '1d' });
};

module.exports.authenticateToken = (passport) => {
  return passport.authenticate('jwt', {session: false});
};
