//https://github.com/babel/example-node-server
//https://medium.com/@Cuadraman/how-to-use-babel-for-production-5b95e7323c2f
/**
 * Module dependencies
 */
import app from '../src/core';
import http from 'http';
import * as config from '../config/config';
import * as utils from '../src/common/utils';
//import cluster from 'cluster';
//import os from 'os';

//const numCpus = os.cpus().length;

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

module.exports = server;

/*
 //USE PM2
 if (cluster.isMaster) {
 utils.logInfo(`Master ${process.pid} is running`);

 // Fork workers.
 for (let i = 0; i < numCpus; i++) {
 cluster.fork();
 }

 cluster.on('exit', (worker, code, signal) => {
 if (signal) {
 utils.logError(`worker was killed by signal: ${signal}`);
 } else if (code !== 0) {
 utils.logError(`worker exited with error code: ${code}`);
 } else {
 utils.logError(`worker ${worker.process.pid} died`);
 }

 let newWorker = cluster.fork();

 // Note the process IDs
 var newPID = newWorker.process.pid;

 // Log the event
 utils.logInfo('worker '+newPID+' born.')
 });

 } else {
 */

