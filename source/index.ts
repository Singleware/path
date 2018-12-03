/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { Helper } from './helper';

/**
 * Normalizes the specified path.
 * @param path Path to be normalized.
 * @return Returns the normalized path.
 */
export const normalize = (path: string): string => Helper.normalize(path);

/**
 * Join the specified path list.
 * @param paths Path list.
 * @returns Returns the joined path.
 */
export const join = (...paths: string[]): string => Helper.join(...paths);

/**
 * Resolves the last absolute path.
 * @param paths Path list.
 * @returns Returns the resolved path.
 */
export const resolve = (...paths: string[]): string => Helper.resolve(...paths);

/**
 * Gets the directory path of the specified path.
 * @param path Path for extraction.
 * @returns Returns the directory path.
 */
export const dirname = (path: string): string => Helper.dirname(path);

/**
 * Gets the directory name of the specified path.
 * @param path Path for extraction.
 * @returns Returns the directory name.
 */
export const basename = (path: string): string => Helper.basename(path);

/**
 * Gets the extension name of the specified path.
 * @param path Path for extraction.
 * @returns Returns the extension name.
 */
export const extname = (path: string): string => Helper.extname(path);
