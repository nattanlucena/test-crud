/*
    Module dependencies
 */
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import * as pathUtils from '../utils/PathUtils';
import path from 'path';
import * as config from '../../config/config';
import mongoose from 'mongoose';

const API_BASE_PATH = config.API_BASE_PATH;
const DB_URI = config.DB_HOST + config.DB_NAME;


/**
 * Initialize application middleware.
 *
 * @method initMiddleware
 * @param {Object} app The express application
 * @private
 */
function initMiddleware(app) {
    app.set('showStackError', true);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(methodOverride());
    app.use(cors());
}

/**
 * Configure CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests.
 *
 * @method initCrossDomain
 * @param {Object} app The express application
 * @private
 */
function initCrossDomain(app) {
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
 * @param {Object} app - Express application
 * @private
 */
function initClientRoutes(app) {
    "use strict";

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
 * @param {Object} app - Express application
 * @private
 */
function initApiRoutes(app) {
    "use strict";
    // Globbing routing files
    pathUtils.getGlobbedPaths(path.join(__dirname, '../modules/**/routes.js')).forEach((routePath) => {
        require(path.resolve(routePath))(app);
    });
}


/**
 * Initialize Database setup config
 * @method initDatabase
 * @private
 */
function initDatabase() {
    "use strict";
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
            process.exit(0);
        });
    });

}


/**
 * Initialize express application
 *
 * @method init
 * @returns {Object} express app object
 */
function init() {
    "use strict";
    var app = express();

    //
    initMiddleware(app);
    //
    initDatabase();
    //
    initClientRoutes(app);
    //
    initCrossDomain(app);
    //
    initApiRoutes(app);

    return app;
}

export default init;