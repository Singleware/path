"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const helper_1 = require("./helper");
/**
 * Normalizes the specified path.
 * @param path Path to be normalized.
 * @return Returns the normalized path.
 */
exports.normalize = (path) => helper_1.Helper.normalize(path);
/**
 * Join the specified path list.
 * @param paths Path list.
 * @returns Returns the joined path.
 */
exports.join = (...paths) => helper_1.Helper.join(...paths);
/**
 * Resolves the last absolute path.
 * @param paths Path list.
 * @returns Returns the resolved path.
 */
exports.resolve = (...paths) => helper_1.Helper.resolve(...paths);
/**
 * Gets the directory path of the specified path.
 * @param path Path for extraction.
 * @returns Returns the directory path.
 */
exports.dirname = (path) => helper_1.Helper.dirname(path);
/**
 * Gets the directory name of the specified path.
 * @param path Path for extraction.
 * @returns Returns the directory name.
 */
exports.basename = (path) => helper_1.Helper.basename(path);
/**
 * Gets the extension name of the specified path.
 * @param path Path for extraction.
 * @returns Returns the extension name.
 */
exports.extname = (path) => helper_1.Helper.extname(path);
