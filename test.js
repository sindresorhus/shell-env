import test from 'ava';
import m from './';

test('async', async t => {
	t.true('HOME' in await m());
});

test('sync', t => {
	t.true('HOME' in m.sync());
});
