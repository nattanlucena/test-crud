"use strict";

import * as jwt from 'jsonwebtoken';

module.exports.createToken = (payload) => {
    let secret = '**@&#((#**';
    return jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '1d' });
};
