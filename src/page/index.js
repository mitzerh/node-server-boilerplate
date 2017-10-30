/*eslint-env es6, node */
'use strict';

const config = require(process.env.CONFIG_PATH);
const Helper = require(`${config.dir.src}/helper`);

const Vue = require('vue');

const opts = {};

opts.template = `
<div id="app">
    <h1>hello there, {{ foo }}</h1>
</div>
`;

opts.data = {
    foo: 'foobar'
};


const app = new Vue(opts);

module.exports = app;
