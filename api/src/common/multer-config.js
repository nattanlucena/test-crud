"use strict";
/*
 Module dependencies
 */
import multer from 'multer';
import path from 'path';

const maxSize = 1000 * 1000 * 20;
const types = ['.jpg', '.jpeg', '.png'];


/**
 * Multer storage configuration
 */
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function (req, file, cb) {
        let dateTimestamp = Date.now();
        let filename = file.fieldname + '-' + dateTimestamp + '.' +
            file.originalname.split('.')[file.originalname.split('.').length -1];

        cb(null, filename);
    }
});

/**
 * Multer configuration
 */
module.exports.upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        if (types.indexOf(path.extname(file.originalname).toLowerCase()) === -1) {
            return cb({code: 'INVALID_FILE_TYPE'});
        }
        cb(null, true);
    }
}).single('file');

