declare namespace shellEnv {
	interface EnvironmentVariables {
		readonly [key: string]: string;
	}
}

declare const shellEnv: {
	/**
	Get the environment variables defined in your dotfiles.

	@param shell - The shell to read environment variables from. Default: User default shell.
	@returns The environment variables.

	@example
	```
	import shellEnv = require('shell-env');

	console.log(shellEnv.sync());
	//=> {TERM_PROGRAM: 'Apple_Terminal', SHELL: '/bin/zsh', ...}

	console.log(shellEnv.sync('/bin/bash'));
	//=> {TERM_PROGRAM: 'iTerm.app', SHELL: '/bin/zsh', ...}
	```
	*/
	(shell?: string): Promise<shellEnv.EnvironmentVariables>;

	/**
	Get the environment variables defined in your dotfiles.

	@param shell - The shell to read environment variables from. Default: User default shell.
	@returns The environment variables.
	*/
	sync(shell?: string): shellEnv.EnvironmentVariables;
};

export = shellEnv;
