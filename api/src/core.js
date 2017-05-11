'use strict';
/*
    Module dependencies
 */
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import busBoyBodyParser from 'busboy-body-parser';
// import multer from 'multer'
import * as pathUtils from './common/path-utils';
import * as utils from './common/path-utils';
import * as config from '../config/config';
let multipart = require('connect-multiparty');
const API_BASE_PATH = config.API_BASE_PATH;
const DB_URI = config.DB_HOST + config.DB_NAME;

let app = express();

/**
 * Initialize express application
 *
 * @method init
 * @returns {Object} express app object
 */
function init() {
    //
    initMiddleware();
    //
    initDatabase();
    //
    initCrossDomain();
    //
    initClientRoutes();    
    //
    initApiRoutes();
    //
    preventErrors();

    return app;
}

/*
 * Initialize application middleware.
 *
 * @method initMiddleware
 * @private
 */
function initMiddleware() {
    app.set('showStackError', true);
    // app.use(busBoyBodyParser({'limit': '5b'}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // app.use
    app.use(methodOverride());
    app.use(cors());
}

/**
 * Initialize Database setup config
 * @method initDatabase
 * @private
 */
function initDatabase() {
    mongoose.Promise = global.Promise;

    mongoose.connect(DB_URI);

    mongoose.connection.on('once', function () {
        console.log('Mongoose connected to ' + DB_URI);
    });

    // if the connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose connection error: ' + err);
    });

    // when the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose disconnected');
    });

    // if the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected through app termination');
            process.exit(1);
        });
    });
}

/**
 * Configure CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests.
 *
 * @method initCrossDomain
 * @private
 */
function initCrossDomain() {
    // setup CORS
    app.use(cors());
    app.use((req, res, next) => {
        // Website you wish to allow to connect
        res.set('Access-Control-Allow-Origin', '*');
        // Request methods you wish to allow
        res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
        // Request headers you wish to allow
        res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');

        // Pass to next layer of middleware
        next();
    });
}

/**
 * Configure client routes
 *
 * @method initClientRoutes
 * @private
 */
function initClientRoutes() {
    app.get(API_BASE_PATH, (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h3>API on!</h3>\n');
    });

    app.get('/', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h3>WebApp!</h3>\n');
    });
}

/**
 * Configure API routes
 *
 * @method initApiRoutes
 * @private
 */
function initApiRoutes() {
    // Globbing routing files
    const ROUTES_PATH = './components/**/routes.js';
    
    pathUtils.getGlobbedPaths(path.join(__dirname, ROUTES_PATH)).forEach((routePath) => {    
        require(path.resolve(routePath))(app);
    });
}


/**
 * Initialize Database setup config
 * @method initDatabase
 * @private
 */
function initDatabase() {
    mongoose.Promise = global.Promise;

    mongoose.connect(DB_URI);
    let conn = mongoose.connection;

    conn.on('once', function () {
        console.log('Mongoose connected to ' + DB_URI);
    });

    // if the connection throws an error
    conn.on('error', function (err) {
        console.log('Mongoose connection error: ' + err);
    });

    // when the connection is disconnected
    conn.on('disconnected', function () {
        console.log('Mongoose disconnected');
    });

    // if the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        conn.close(function () {
            console.log('Mongoose disconnected through app termination');
            process.exit(1);
        });
    });
}

/**
 * Prevent uncaughtException error
 */
function preventErrors() {
    require('./common/crash-error-handler');
}

export default init;
