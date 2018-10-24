export interface EnvironmentVariables {
    readonly [key: string]: string;
    readonly SHELL: string;
    readonly TERM_PROGRAM: string;
}

/**
 * Get the environment variables defined in your dotfiles.
 *
 * @param shell To read the environment variables from.
 * @returns The environment variables.
 */
export function sync(shell?: string): ShellEnv;

/**
 * Get the environment variables defined in your dotfiles.
 * 
 * @param shell - The shell to read the environment variables from.
 * @returns The environment variables.
 */
export function shellEnv(shell?: string): Promise<ShellEnv>;

export default shellEnv;
