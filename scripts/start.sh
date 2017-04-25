#!/bin/bash

if [ $NODE_ENV = "production" ]; then
    node bin/app.js
else
    nodemon bin/app.js --exec babel-node
fi