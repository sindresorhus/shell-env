export interface EnvironmentVariables {
	readonly [key: string]: string;
}

/**
 * Get the environment variables defined in your dotfiles.
 *
 * @param shell - The shell to read environment variables from. Default: User default shell.
 * @returns The environment variables.
 */
export function sync(shell?: string): EnvironmentVariables;

/**
 * Get the environment variables defined in your dotfiles.
 *
 * @param shell - The shell to read environment variables from. Default: User default shell.
 * @returns The environment variables.
 */
export default function shellEnv(shell?: string): Promise<EnvironmentVariables>;
