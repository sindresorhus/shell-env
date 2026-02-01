import fs from 'node:fs/promises';
import path from 'node:path';
import test from 'ava';
import {shellEnv, shellEnvSync} from './index.js';

test('async', async t => {
	const env = await shellEnv();
	t.true('HOME' in env);
	t.false('' in env);
	t.is(env.ZSH_TMUX_AUTOSTARTED, 'true');
	t.is(env.ZSH_TMUX_AUTOSTART, 'false');
});

test('sync', t => {
	const env = shellEnvSync();
	t.true('HOME' in env);
	t.false('' in env);
	t.is(env.ZSH_TMUX_AUTOSTARTED, 'true');
	t.is(env.ZSH_TMUX_AUTOSTART, 'false');
});

test('sync - ignores env alias', async t => {
	const temporaryDirectoryPrefix = path.join(process.cwd(), 'temporary-shell-env-');
	const temporaryDirectory = await fs.mkdtemp(temporaryDirectoryPrefix);

	try {
		const bashConfigurationPath = path.join(temporaryDirectory, '.bashrc');
		const bashWrapperPath = path.join(temporaryDirectory, 'bash-wrapper.sh');
		const bashWrapperContents = [
			'#!/bin/sh',
			`HOME="${temporaryDirectory}"`,
			'export HOME',
			'exec /bin/bash "$@"',
			'',
		].join('\n');

		await fs.writeFile(bashConfigurationPath, 'alias env="printf no"\n');
		await fs.writeFile(bashWrapperPath, bashWrapperContents);
		await fs.chmod(bashWrapperPath, 0o755);

		const env = shellEnvSync(bashWrapperPath);
		t.is(env.HOME, temporaryDirectory);
	} finally {
		await fs.rm(temporaryDirectory, {recursive: true, force: true});
	}
});

test('async - with custom shell', async t => {
	const shell = '/bin/bash';
	const env = await shellEnv(shell);
	t.true('HOME' in env);
	t.false('' in env);
});

test('sync - with custom shell', t => {
	const shell = '/bin/bash';
	const env = shellEnvSync(shell);
	t.true('HOME' in env);
	t.false('' in env);
});

test('async - with custom shell throws on non-executable', async t => {
	await t.throwsAsync(shellEnv('non-executable'));
});

test('sync - with custom shell throws on non-executable', t => {
	t.throws(() => {
		shellEnvSync('non-executable');
	});
});
