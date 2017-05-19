let mongoose = require('mongoose');
let userFactory = require('./user-factory');

let initDatabase = function() {

    let DB_URI = 'mongodb://127.0.0.1/automation-tests';
    mongoose.connect(DB_URI);

    let db = mongoose.connection.db;
    mongoose.connection.on('open', function () {

        let userCollection = db.users;
        let users = userFactory.generateUsers();
        userCollection.create(users, function(err) {
            if (err) {
                throw err;
            }
        })
    });
};

module.exports.initDatabase = initDatabase;
