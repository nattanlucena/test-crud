#!/bin/bash

export NODE_ENV=unit-tests
node_modules/.bin/mocha --compilers js:babel-core/register src/components/**/*.spec.js
