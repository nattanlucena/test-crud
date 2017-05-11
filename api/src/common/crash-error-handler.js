import * as utils from './utils';

/**
 * Prevent uncaughtException event
 */
process.on('uncaughtException', (err) => {

    let timeout = 1;

    utils.logError('SERVER CRASHED');
    utils.logError(err);

    setTimeout( () => {
            utils.logError('KILLING PROCESS');
            process.exit();
    }, timeout );
});
