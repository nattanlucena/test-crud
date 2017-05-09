"use strict";
/*
    Module dependencies
 */
import mongoose from 'mongoose';
import GridFs from 'gridfs-stream';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

GridFs.mongo = mongoose.mongo;

let conn = mongoose.connection;
let gfs = GridFs(conn.db);

const maxSize = 1000 * 1000 * 20;
const types = ['.jpg', '.jpeg', '.png'];

//multer settings for single upload
module.exports.upload = multer({
    dest: './public/images/tmp/',
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        if (types.indexOf(path.extname(file.originalname).toLowerCase()) === -1) {
            return cb(new Error('INVALID_FILE_TYPE'));
        }
        cb(null, true);
    }
}).single('file');

module.exports.writeStream = (file, body) => {
    let datetimestamp = Date.now();
    let filename = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];

    return gfs.createWriteStream({
            filename: filename,
            mode: 'w',
            content_type: file.mimetype,
            root: 'avatar-user',
            metadata: body
        });
};

module.exports.readStream = (file, writeStream) => {
    fs.createReadStream(file.path).pipe(writeStream);
};

module.exports.unlink = (file, callback) => {
    fs.unlink(file.path, callback);
};

