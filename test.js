import test from 'ava';
import m from './';

test('async', async t => {
	const env = await m();
	t.true('HOME' in env);
	t.false('' in env);
});

test('sync', t => {
	const env = m.sync();
	t.true('HOME' in env);
	t.false('' in env);
});

test('async with custom shell', async t => {
	const shell = '/bin/bash';
	const env = await m(shell);
	t.true('HOME' in env);
	t.false('' in env);
});

test('sync with custom shell', t => {
	const shell = '/bin/bash';
	const env = m.sync(shell);
	t.true('HOME' in env);
	t.false('' in env);
});

test('sync with custom shell throws on non-executable', async t => {
	t.throws(() => m.sync('non-executable'));
});

test('async with custom shell throws on non-executable', async t => {
	await t.throws(m('non-executable'));
});
