#!/bin/bash

export NODE_ENV=development
nodemon bin/app.js --exec babel-node
