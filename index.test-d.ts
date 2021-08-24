import {expectType} from 'tsd';
import {shellEnv, shellEnvSync, EnvironmentVariables} from './index.js';

expectType<Promise<EnvironmentVariables>>(shellEnv());
expectType<EnvironmentVariables>(shellEnvSync());
