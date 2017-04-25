"use strict";

import chai from 'chai';
import request from 'supertest';
import server from '../../../bin/app';

let expect = chai.expect;

const API_BASE_PATH = '/api/users/';


describe('Users', function () {

    it('#Test server is on', function (done) {
        request(server)
            .get('/api/')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    expect(res.text).to.equal("<h3>API on!</h3>\n");
                    done();
                }
            });
    });

    it('#Test get all users', function (done) {
        request(server)
            .get(API_BASE_PATH)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    expect(res.body.data).to.be.an('array');
                    done();
                }
            });
    });

    it('#Test save an user', function (done) {
        let user = {
            "name": "user1",
            "email": "user1@gmail.com",
            "password": "123456"
        };
        request(server)
            .post(API_BASE_PATH)
            .send(user)
            .expect(201)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    expect(res.body.data.email).to.equal("user1@gmail.com");
                    done();
                }
            });
    });

    it('#Test save a repeat email user', function (done) {
        let user = {
            "name": "user1",
            "email": "user1@gmail.com",
            "password": "123456"
        };
        request(server)
            .post(API_BASE_PATH)
            .send(user)
            .expect(500)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    expect(res.body.error).to.be.an('object');
                    expect(res.body.error.email).to.equal('Error, expected email to be unique.');
                    done();
                }
            });
    });

    it('#Test update a user', function (done) {
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
                    done();
                } else {
                    expect(res.body.data).to.be.an('object');
                    expect(res.body.data.email).to.equal('user2@gmail.com');
                    expect(res.body.data.name).to.equal('user2');
                    done();
                }
            });
    });

    it('#Test search users by email', function (done) {
        request(server)
            .get(API_BASE_PATH + 'email/user2@gmail.com')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    expect(res.body.data).to.be.an('object');
                    expect(res.body.data.email).to.equal('user2@gmail.com');
                    done();
                }
            });
    });

});