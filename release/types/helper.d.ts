/**
 * Path helper class.
 */
export declare class Helper {
    /**
     * Path separator.
     */
    static separator: string;
    /**
     * Normalizes the specified path.
     * @param path Path to be normalized.
     * @return Returns the normalized path.
     */
    static normalize(path: string): string;
    /**
     * Join the specified path list.
     * @param paths Path list.
     * @returns Returns the joined path.
     */
    static join(...paths: string[]): string;
    /**
     * Resolves the last absolute path.
     * @param paths Path list.
     * @returns Returns the resolved path.
     */
    static resolve(...paths: string[]): string;
    /**
     * Gets the directory path of the specified path.
     * @param path Path for extraction.
     * @returns Returns the directory path.
     */
    static dirname(path: string): string;
    /**
     * Gets the directory name of the specified path.
     * @param path Path for extraction.
     * @returns Returns the directory name.
     */
    static basename(path: string): string;
    /**
     * Gets the extension name of the specified path.
     * @param path Path for extraction.
     * @returns Returns the extension name.
     */
    static extname(path: string): string;
}
