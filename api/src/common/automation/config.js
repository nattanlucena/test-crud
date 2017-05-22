import config from '../../../config/db-config';

let mongoose = require('mongoose');
let userFactory = require('./user-factory');

export let initDatabaseAutomation = () => {

    let db = mongoose.connection.db;
    console.log(mongoose.connection);

    return db;
    // mongoose.connection.on('open', function () {
    //     let userCollection = db.users;
    //     let users = userFactory.generateUsers();
    //     userCollection.create(users, function(err) {
    //         if (err) {
    //             throw err;
    //         }
    //     })
    // });
};
