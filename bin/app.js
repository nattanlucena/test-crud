//https://github.com/babel/example-node-server
//https://medium.com/@Cuadraman/how-to-use-babel-for-production-5b95e7323c2f
/**
 * Module dependencies
 */
import app from '../src/middleware/express';
import http from 'http';
import * as config from '../config/config';
import * as utils from '../src/utils/Utils';

const server = http.Server(app());
const PORT = config.PORT;
const HOSTNAME = config.HOSTNAME;
const INITIALIZE_MESSAGE = 'API running on http://' + HOSTNAME + ':' + PORT;

/**
 * Initialize HTTP server
 */
server.listen(PORT, () => {
    "use strict";
    utils.logInfo(INITIALIZE_MESSAGE);
});

export default server;
