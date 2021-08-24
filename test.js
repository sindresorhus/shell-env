import test from 'ava';
import {shellEnv, shellEnvSync} from './index.js';

test('async', async t => {
	const env = await shellEnv();
	t.true('HOME' in env);
	t.false('' in env);
});

test('sync', t => {
	const env = shellEnvSync();
	t.true('HOME' in env);
	t.false('' in env);
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
		shellEnv.sync('non-executable');
	});
});
