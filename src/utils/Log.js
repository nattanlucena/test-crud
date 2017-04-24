"use strict";
/*
    Module dependencies
 */
import chalk from 'chalk';
import moment from 'moment';

//Enable colors
chalk.enabled = true;

/**
 * Custom console log function
 *
 * @type {{info: (function(msg)), debug: (function(msg)), warn: (function(msg)), error: (function(msg))}}
 */
module.exports = {
    info: function (msg) {
        var formattedMsg = chalk.bold.white(getFormattedData() + ' [INFO] ' + msg + '\n');
        process.stdout.write(formattedMsg)
    },
    debug: function (msg) {
        var formattedMsg = chalk.bold.blue(getFormattedData() + ' [DEBUG] ' + msg + '\n');
        process.stdout.write(formattedMsg)
    },
    warn: function (msg) {
        var formattedMsg = chalk.bold.orange(getFormattedData() + ' [WARN] ' + msg + '\n');
        process.stdout.write(formattedMsg)
    },
    error: function (msg) {
        var formattedMsg = chalk.bold.red('[' + getFormattedData() + ' [ERROR] ' + msg + '\n');
        process.stderr.write(formattedMsg)
    }
};

/**
 *  Formatted moment
 */
function getFormattedData() {
    return moment().format('DD-MMYYYY HH:mm:ss')
}