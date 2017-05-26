'use strict';
/*
    Module dependencies
 */
import express          from 'express';
import bodyParser       from 'body-parser';
import methodOverride   from 'method-override';
import cors             from 'cors';
import path             from 'path';
import passport         from 'passport';

import * as pathUtils   from './common/path-utils';
import * as config      from '../config/config';
import { initDatabase }    from '../config/db-config';
import { strategy }     from './components/auth/token/strategy';

const API_BASE_PATH     = config.API_BASE_PATH;

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
    initDatabaseConfig();
    //
    initCrossDomain();
    //
    initClientRoutes();
    //
    initPassport();
    //
    initPassportStrategy();
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
let initMiddleware = () => {
    app.set('showStackError', true);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(methodOverride());
    app.use(cors());
};

/**
 * Initialize Database setup config
 *
 * @method initDatabaseConfig
 */
let initDatabaseConfig = () => {
    initDatabase();
};

/**
 * Configure CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests.
 *
 * @method initCrossDomain
 */
let initCrossDomain = () => {
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
};

/**
 * Configure client routes
 *
 * @method initClientRoutes
 */
let initClientRoutes = () => {
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
};

/**
 * Configure API routes
 *
 * @method initApiRoutes
 */
let initApiRoutes = () => {
    // Globbing routing files
    const ROUTES_PATH = './components/**/routes.js';

    pathUtils.getGlobbedPaths(path.join(__dirname, ROUTES_PATH)).forEach((routePath) => {
        require(path.resolve(routePath))(app, passport);
    });
};

/**
 * Initialize passport strategy to avoid non-authenticated users to call private functions
 */
let initPassport = () => {
    app.use(passport.initialize());
};


/**
 * Initialize jwt passport strategy
 */
let initPassportStrategy = () => {
    strategy(passport);
};

/**
 * Prevent uncaughtException error
 */
let preventErrors = () => {
    require('./common/crash-error-handler');
};

export default init;
