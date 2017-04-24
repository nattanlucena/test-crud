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

    it('#Test get all users function', function (done) {
        request(server)
            .get(API_BASE_PATH)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    expect(res.body.users).to.be.an('array');
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
                    // console.log(res.body.user.name);
                    expect(res.body.user.email).to.equal("user1@gmail.com");
                    done();
                }
            });
    });

});