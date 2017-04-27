#!/bin/bash

export NODE_ENV=unit-tests
node_modules/.bin/mocha --reporter --compilers js:babel-core/register src/modules/**/*.spec.js
