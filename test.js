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
