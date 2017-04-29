"use strict";

import * as jwt from 'jsonwebtoken';

module.exports.createToken = (payload) => {
    let secret = '**@&#((#**';
    let token = jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '1d' });

    return token;
};
