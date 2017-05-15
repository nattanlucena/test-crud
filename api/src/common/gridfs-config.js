'use strict';
/*
    Module dependencies
 */
import mongoose from 'mongoose';
import GridFs from 'gridfs-stream';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

GridFs.mongo = mongoose.mongo;

const maxSize = 1000 * 1000 * 20;
const types = ['.jpg', '.jpeg', '.png'];

const getConnection = async function () {
    return new Promise((resolve) => {
        resolve(mongoose.connection);
    });
};

// let gfs =
async function gfsConfig()  {
    let conn = await getConnection();
    let gridfs = GridFs(conn.db);

    return gridfs;
}

module.exports.upload = multer({
    dest: './public/images/tmp/',
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
        if (types.indexOf(path.extname(file.originalname).toLowerCase()) === -1) {
            return cb(new Error('INVALID_FILE_TYPE'));
        }
        cb(null, true);
    }
}).single('file');

//
module.exports.writeStream = (file, body) => {
    let datetimestamp = Date.now();
    let filename = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];

    return gfsConfig().then((gfs) => {
        return gfs.createWriteStream({
            filename: filename,
            mode: 'w',
            content_type: file.mimetype,
            root: 'avatar-user',
            metadata: body
        });
    });
};

//
module.exports.readStream = (file, writeStream) => {
    try{
        fs.createReadStream(file.path).pipe(writeStream);
    } catch (err) {
        throw err;
    }
};

//
module.exports.unlink = (file, callback) => {
    fs.unlink(file.path, callback);
};
