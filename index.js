'use strict';
const execa = require('execa');
const stripAnsi = require('strip-ansi');
const defaultShell = require('default-shell');

const args = ['-ilc', 'env; exit'];

function parseEnv(env) {
	const ret = {};

	let lines = stripAnsi(env).split('\n')
	lines[0] = lines[0].split(process.env.PWD + "\u0007").pop() 

	for (const line of lines) {
		const parts = line.split('=');
		ret[parts.shift()] = parts.join('=');
	}

	return ret;
}

module.exports = shell => {
	if (process.platform === 'win32') {
		return Promise.resolve(process.env);
	}

	return execa(shell || defaultShell, args)
		.then(result => parseEnv(result.stdout))
		.catch(err => {
			if (shell) {
				throw err;
			} else {
				return process.env;
			}
		});
};

module.exports.sync = shell => {
	if (process.platform === 'win32') {
		return process.env;
	}

	try {
		const {stdout} = execa.sync(shell || defaultShell, args);
		return parseEnv(stdout);
	} catch (err) {
		if (shell) {
			throw err;
		} else {
			return process.env;
		}
	}
};
