/*eslint-env es6, node */
'use strict';

const config = require(process.env.CONFIG_PATH);
const Helper = require(`${config.dir.src}/helper`);
const colors = require('colors');
const log = console.log;

const express = require('express');
const bodyParser = require('body-parser');
const VueApp = require(`${config.dir.src}/page`);
const renderer = require('vue-server-renderer').createRenderer();

log('[server] starting server..'.green);
log('[server] environment:'.green, config.env);

const app = express();
const server = app.listen(config.server.port);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    setHeader(res);
    renderer.renderToString(VueApp, (err, html) => {
        if (err) throw err;
        html = stripVue(html);
        res.send(html);
    });
});

function setHeader(res) {
    res.setHeader('Content-Type', 'text/html');
}

function stripVue(html) {
    // remove this, we don't need it because we're not using vue on the frontend
    html = html.replace(/(|\s+)data-server-rendered="true"(|\s+)/, '');
    return html;
}

log('[server] URL:', `http://localhost:${config.server.port}/`.cyan);
