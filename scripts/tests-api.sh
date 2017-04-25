#!/bin/bash

NODE_ENV=development TEST=true node_modules/.bin/mocha --compilers js:babel-core/register src/modules/**/*.spec.js
