#!/bin/bash

export NODE_ENV=automation-tests
nodemon --max_old_space_size=5000 --max_new_space_size=5000 bin/app.js --exec babel-node
