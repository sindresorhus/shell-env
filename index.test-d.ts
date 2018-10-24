import {expectType} from 'tsd-check';
import shellEnv, {sync, ShellEnv} from '.';

(async () => {
    expectType<ShellEnv>(sync());
    expectType<ShellEnv>(await shellEnv());
})();
