/*eslint-env es6, node */
'use strict';

const dir = __dirname;
const ENV_TYPE = (process.env.ENV_TYPE === 'dev') ? 'dev' : 'prod';

const envs = {
    ENV_TYPE: ENV_TYPE,
    CONFIG_PATH: `${dir}/src/config`,
    SERVER_CONFIG_PATH: `${dir}/conf/${ENV_TYPE}.json`
};

for (let id in envs) {
    process.env[id] = envs[id];
}
