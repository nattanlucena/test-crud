'use strict';
/*
    Module dependencies
 */
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import path from 'path';
import * as pathUtils from './common/path-utils';
import * as config from '../config/config';
import * as dbConfig from '../config/db-config';

const API_BASE_PATH = config.API_BASE_PATH;

let app = express();

/**
 * Initialize express application
 *
 * @method init
 * @returns {Object} express user.app object
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

/**
 * Initialize application middleware.
 *
 * @method initMiddleware
 */
function initMiddleware() {
    app.set('showStackError', true);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(methodOverride());
    app.use(cors());
}

/**
 * Initialize Database setup config
 *
 * @method initDatabase
 */
function initDatabase() {
    dbConfig.initDatabase();
}

/**
 * Configure CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests.
 *
 * @method initCrossDomain
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
 */
function initApiRoutes() {
    // Globbing routing files
    const ROUTES_PATH = './components/**/routes.js';
    
    pathUtils.getGlobbedPaths(path.join(__dirname, ROUTES_PATH)).forEach((routePath) => {    
        require(path.resolve(routePath))(app);
    });
}


/**
 * Prevent uncaughtException error
 */
function preventErrors() {
    require('./common/crash-error-handler');
}

export default init;
