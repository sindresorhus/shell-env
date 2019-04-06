import {expectType} from 'tsd';
import shellEnv = require('.');
import {EnvironmentVariables} from '.';

expectType<EnvironmentVariables>(shellEnv.sync());
expectType<Promise<EnvironmentVariables>>(shellEnv());
