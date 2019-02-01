'use strict';
const execa = require('execa');
const stripAnsi = require('strip-ansi');
const defaultShell = require('default-shell');

const args = [
	'-ilc',
	'echo -n "_SHELL_ENV_DELIMITER_"; env; echo -n "_SHELL_ENV_DELIMITER_"; exit'
];

function parseEnv(env) {
	env = env.split('_SHELL_ENV_DELIMITER_')[1];
	const ret = {};

	for (const line of stripAnsi(env).split('\n').filter(line => Boolean(line))) {
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
		.catch(error => {
			if (shell) {
				throw error;
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
	} catch (error) {
		if (shell) {
			throw error;
		} else {
			return process.env;
		}
	}
};
