'use strict';
const childProcess = require('child_process');
const execa = require('execa');
const stripAnsi = require('strip-ansi');
const defaultShell = require('default-shell');
const args = ['-ic', 'env; exit'];

function parseEnv(env) {
	const ret = {};

	stripAnsi(env).split('\n').forEach(x => {
		const parts = x.split('=');
		ret[parts.shift()] = parts.join('=');
	});

	return ret;
}

module.exports = () => {
	if (process.platform === 'win32') {
		return Promise.resolve(process.env);
	}

	return execa(defaultShell, args)
		.then(x => parseEnv(x.stdout))
		.catch(() => process.env);
};

module.exports.sync = () => {
	if (process.platform === 'win32') {
		return process.env;
	}

	try {
		// TODO: use `execa` → https://github.com/sindresorhus/execa/issues/7
		return parseEnv(childProcess.execFileSync(defaultShell, args, {encoding: 'utf8'}));
	} catch (err) {
		return process.env;
	}
};
