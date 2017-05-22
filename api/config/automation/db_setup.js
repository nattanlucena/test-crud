import mongoose from 'mongoose';
import userFactory from './user-factory';
import { User } from '../../src/components/user';


export const initAutomationDatabase = () => {
    // let userCollection = db.users;
    console.log(new Date());
    if (mongoose.connection.db) {
        mongoose.connection.db.dropDatabase((err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    let users = userFactory.generateUsers();
    User.saveMany(users, function(err) {
        if (err) {
            console.log(err);
        }
        console.log(new Date());
    });


};
