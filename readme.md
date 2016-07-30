# shell-env [![Build Status](https://travis-ci.org/sindresorhus/shell-env.svg?branch=master)](https://travis-ci.org/sindresorhus/shell-env)

> Get [environment variables](https://en.wikipedia.org/wiki/Environment_variable) from the [shell](https://en.wikipedia.org/wiki/Shell_(computing))

Especially useful for Electron/NW.js apps as GUI apps on macOS doesn't inherit the environment variables defined in your dotfiles *(.bashrc/.bash_profile/.zshrc/etc)*.


## Install

```
$ npm install --save shell-env
```


## Usage

```js
const shellEnv = require('shell-env');

console.log(shellEnv.sync());
//=> {TERM_PROGRAM: 'Apple_Terminal', SHELL: '/bin/zsh', ...}

console.log(shellEnv.sync('/bin/bash'));
//=> {TERM_PROGRAM: 'iTerm.app', SHELL: '/bin/zsh', ...}
```


## API

### shellEnv([shell])

Return a promise for the environment variables.

### shellEnv.sync([shell])

Returns the environment variables.

#### shell

Type: `string`<br>
Default: [User default shell](https://github.com/sindresorhus/default-shell)

Shell to read the environment variables from.


## Related

- [shell-path](https://github.com/sindresorhus/shell-path) - Get the $PATH from the shell
- [fix-path](https://github.com/sindresorhus/fix-path) - Fix the $PATH on macOS when run from a GUI app
- [shell-history](https://github.com/sindresorhus/shell-history) - Get the command history of the user's shell


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
