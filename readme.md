# shell-env

> Get [environment variables](https://en.wikipedia.org/wiki/Environment_variable) from the [shell](https://en.wikipedia.org/wiki/Shell_(computing))

Especially useful for Electron apps as GUI apps on macOS doesn't inherit the environment variables defined in your dotfiles *(.bash_profile/.zshrc/etc)*.

## Install

```sh
npm install shell-env
```

## Usage

```js
import {shellEnv} from 'shell-env';

console.log(await shellEnv());
//=> {TERM_PROGRAM: 'Apple_Terminal', SHELL: '/bin/zsh', ...}

console.log(await shellEnv('/bin/bash'));
//=> {TERM_PROGRAM: 'iTerm.app', SHELL: '/bin/zsh', ...}
```

## API

> [!NOTE]
> For Bash, it reads [`.bash_profile`, but not `.bashrc`](https://apple.stackexchange.com/questions/51036/what-is-the-difference-between-bash-profile-and-bashrc).

> [!NOTE]
> If your default shell is a non-POSIX shell (e.g., Nushell), it will fall back to `/bin/zsh` or `/bin/bash`.

> [!NOTE]
> It disables the oh-my-zsh tmux plugin auto-start by setting `ZSH_TMUX_AUTOSTARTED` and `ZSH_TMUX_AUTOSTART=false` so the shell does not launch tmux while capturing environment variables.

### shellEnv(shell?)

Return a promise for the environment variables.

### shellEnvSync(shell?)

Returns the environment variables.

#### shell

Type: `string`\
Default: [User default shell](https://github.com/sindresorhus/default-shell)

Shell to read the environment variables from.

## Related

- [shell-path](https://github.com/sindresorhus/shell-path) - Get the $PATH from the shell
- [fix-path](https://github.com/sindresorhus/fix-path) - Fix the $PATH on macOS when run from a GUI app
- [shell-history](https://github.com/sindresorhus/shell-history) - Get the command history of the user's shell

## Maintainers

- [Sindre Sorhus](https://sindresorhus.com)
- [@silverwind](https://github.com/silverwind)
