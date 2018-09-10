"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the path helper package.
 */
const Path = require("../source");
const pathA = 'singleware//tests/../tests';
const pathB = '/home/singleware/tests';
const pathC = '/home/singleware';
// Normalizes the specified path.
console.log(Path.normalize(pathA));
// Join the specified path.
console.log(Path.join(pathC, '../', pathA));
// Resolves the last absolute path.
console.log(Path.resolve(pathB, pathC));
// Extract the directory path.
console.log(Path.dirname(pathB));
// Extract the directory name.
console.log(Path.basename(pathA));
