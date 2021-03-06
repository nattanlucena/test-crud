"use strict";
/*
    Module dependencies
 */
import chalk    from 'chalk';
import moment   from 'moment';

//Enable colors
chalk.enabled = true;

/**
 * Custom console log function
 *
 * @type {{info: (function(msg)), debug: (function(msg)), warn: (function(msg)), error: (function(msg))}}
 */
module.exports = {
    info: (msg) => {
        let formattedMsg = chalk.bold.white(getFormattedData() + ' [INFO] ' + msg + '\n');
        process.stdout.write(formattedMsg)
    },
    debug: (msg) => {
        let formattedMsg = chalk.bold.blue(getFormattedData() + ' [DEBUG] ' + msg + '\n');
        process.stdout.write(formattedMsg)
    },
    warn: (msg) => {
        let formattedMsg = chalk.bold.orange(getFormattedData() + ' [WARN] ' + msg + '\n');
        process.stdout.write(formattedMsg)
    },
    error: (msg) => {

        let localMsg = typeof msg === 'object' ? JSON.stringify(msg): msg;
        let formattedMsg = chalk.bold.red(getFormattedData() + ' [ERROR] ' + localMsg + '\n');
        process.stderr.write(formattedMsg)
    }
};

/**
 *  Formatted moment
 */
let getFormattedData = () => (moment().format('DD-MM-YYYY HH:mm:ss'));
