import {expectType} from 'tsd-check';
import shellEnv, {sync, EnvironmentVariables} from '.';

expectType<EnvironmentVariables>(sync());
expectType<EnvironmentVariables>(await shellEnv());
