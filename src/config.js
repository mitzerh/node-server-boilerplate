/*eslint-env es6, node */
'use strict';

const Helper = require('./helper');
const dir = __dirname;

const config = {};

config.env = process.env.ENV_TYPE;
config.server = JSON.parse(Helper.readFile(`${process.env.SERVER_CONFIG_PATH}`));

config.dir = {
    src: `${dir}`
};

module.exports = config;
