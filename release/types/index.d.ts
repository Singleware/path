/**
 * Normalizes the specified path.
 * @param path Path to be normalized.
 * @return Returns the normalized path.
 */
export declare const normalize: (path: string) => string;
/**
 * Join the specified path list.
 * @param paths Path list.
 * @returns Returns the joined path.
 */
export declare const join: (...paths: string[]) => string;
/**
 * Resolves the last absolute path.
 * @param paths Path list.
 * @returns Returns the resolved path.
 */
export declare const resolve: (...paths: string[]) => string;
/**
 * Gets the directory path of the specified path.
 * @param path Path for extraction.
 * @returns Returns the directory path.
 */
export declare const dirname: (path: string) => string;
/**
 * Gets the directory name of the specified path.
 * @param path Path for extraction.
 * @returns Returns the directory name.
 */
export declare const basename: (path: string) => string;
/**
 * Gets the extension name of the specified path.
 * @param path Path for extraction.
 * @returns Returns the extension name.
 */
export declare const extname: (path: string) => string;
