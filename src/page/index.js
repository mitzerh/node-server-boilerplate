/*eslint-env es6, node */
'use strict';

const config = require(process.env.CONFIG_PATH);
const Helper = require(`${config.dir.src}/helper`);

const Vue = require('vue');
//const App = require('./App.vue');

const app = new Vue({
    template: `
    <div id="app">
        <h1>hello there, {{ foo }}</h1>
    </div>
    `,
    data: {
        foo: 'foobar'
    }
});

module.exports = app;
