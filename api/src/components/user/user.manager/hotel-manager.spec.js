"use strict";

import chai from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import mochaMongoose from 'mocha-mongoose';
import server from '../../../../bin/app';
import * as config from '../../../../config/config';

const API_BASE_PATH = '/api/manager/users/';
const TEST_DB_PATH = config.DB_HOST + config.DB_NAME;

let expect = chai.expect;
let clearDB = mochaMongoose(TEST_DB_PATH, {noClear: true});


/**
 * Runs all unit tests for user module
 */
describe('USER Module', function () {

    /*
     * Runs before all tests
     */
    before((done) => {
        if (mongoose.connection.db) {
            return done();
        } else {
            mongoose.connect(TEST_DB_PATH, done);
        }
    });


    /*
     * Runs before all tests
     */
    before((done) => {
        clearDB(done);
    });


    it('#Test server is on', function (done) {
        request(server)
            .get('/api/')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    throw new Error(err);
                } else {
                    expect(res.text).to.equal("<h3>API on!</h3>\n");
                }
                done();
            });
    });

    it('#Test get all users', function (done) {
        request(server)
            .get(API_BASE_PATH)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    throw new Error(err);
                } else {
                    expect(res.body.data).to.be.an('array');
                }
                done();
            });
    });


    it('#Test save an user', function (done) {
        let user = {
            "name": "user1",
            "email": "user1@gmail.com",
            "cpf": "388399488595",
            "password": "123456"
        };
        request(server)
            .post(API_BASE_PATH)
            .send(user)
            .expect(201)
            .end((err, res) => {
                if (err) {
                    throw new Error(err);
                } else {
                    expect(res.body.data.email).to.equal("user1@gmail.com");
                }
                done();
            });
    });

    it('#Test save a repeated email user', function (done) {
        let user = {
            "name": "user1",
            "email": "user1@gmail.com",
            "cpf": "388398595",
            "password": "123456"
        };
        request(server)
            .post(API_BASE_PATH)
            .send(user)
            .expect(500)
            .end((err, res) => {
                if (err) {
                    throw new Error(err);
                } else {
                    expect(res.body.error).to.be.an('object');
                    expect(res.body.error.email).to.equal('Error, expected email to be unique.');
                }
                done();
            });
    });


    it('#Test update an user', function (done) {
        let user = {
            "name": "user2",
            "email": "user2@gmail.com",
            "password": "123456"
        };
        request(server)
            .put(API_BASE_PATH + 'user1@gmail.com')
            .send(user)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    throw new Error(err);
                } else {
                    expect(res.body.data).to.be.an('object');
                    expect(res.body.data.email).to.equal('user2@gmail.com');
                    expect(res.body.data.name).to.equal('user2');
                }
                done();
            });
    });

    it('#Test search users by email', function (done) {
        request(server)
            .get(API_BASE_PATH + 'email/user2@gmail.com')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    throw new Error(err);
                } else {
                    expect(res.body.data).to.be.an('object');
                    expect(res.body.data.email).to.equal('user2@gmail.com');
                }
                done();

            });
    });
});
