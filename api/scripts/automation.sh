#!/bin/bash

export NODE_ENV=automation-tests
nodemon bin/app.js --exec babel-node
