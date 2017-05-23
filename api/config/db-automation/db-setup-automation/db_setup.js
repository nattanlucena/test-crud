import mongoose from 'mongoose';
import userFactory from '../db-collections/user-factory';
import { User } from '../../../src/components/user/index';


export const initAutomationDatabase = () => {
    // let userCollection = db.users;
    console.log('Init', new Date());
    if (mongoose.connection.db) {
        mongoose.connection.db.dropDatabase((err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    let users = userFactory.generateUsers();
    User.saveMany(users, function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Done', new Date());
    });
};
