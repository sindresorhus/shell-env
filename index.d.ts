declare module 'shell-env' {
    /**
     * Get the environment variables defined in your dotfiles
     *
     * @param shell To read the environment variables from
     * @returns The environment variables
     */
    function sync(shell?: string): object;

    /**
     * Get the environment variables defined in your dotfiles
     * 
     * @param shell To read the environment variables from
     * @returns The environment variables
     */
    export default function shellEnv(shell?: string): Promise<object>;
}
