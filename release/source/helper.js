"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Path helper class.
 */
let Helper = class Helper extends Class.Null {
    /**
     * Normalizes the specified path.
     * @param path Path to be normalized.
     * @return Returns the normalized path.
     */
    static normalize(path) {
        const pieces = path.split(this.separator);
        const newer = [];
        for (let i = 0; i < pieces.length; ++i) {
            const directory = pieces[i];
            if (i === 0 || i + 1 === pieces.length || (directory.length && directory !== '.')) {
                if (directory === '..') {
                    newer.pop();
                }
                else {
                    newer.push(directory);
                }
            }
        }
        return newer.join(this.separator);
    }
    /**
     * Join the specified path list.
     * @param paths Path list.
     * @returns Returns the joined path.
     */
    static join(...paths) {
        return this.normalize(paths.join(this.separator));
    }
    /**
     * Resolves the last absolute path.
     * @param paths Path list.
     * @returns Returns the resolved path.
     */
    static resolve(...paths) {
        let resolved = '';
        for (const path of paths) {
            resolved = path[0] === this.separator ? path : this.join(resolved, path);
        }
        return resolved;
    }
    /**
     * Gets the directory path of the specified path.
     * @param path Path for extraction.
     * @returns Returns the directory path.
     */
    static dirname(path) {
        const normalized = this.normalize(path);
        return normalized.substr(0, normalized.lastIndexOf(this.separator));
    }
    /**
     * Gets the directory name of the specified path.
     * @param path Path for extraction.
     * @returns Returns the directory name.
     */
    static basename(path) {
        const normalized = this.normalize(path);
        return normalized.substr(normalized.lastIndexOf(this.separator) + 1);
    }
    /**
     * Gets the extension name of the specified path.
     * @param path Path for extraction.
     * @returns Returns the extension name.
     */
    static extname(path) {
        const base = this.basename(path);
        return base[0] === '.' ? '' : base.substr(base.lastIndexOf('.') + 1);
    }
};
/**
 * Path separator.
 */
Helper.separator = '/';
__decorate([
    Class.Public()
], Helper, "separator", void 0);
__decorate([
    Class.Public()
], Helper, "normalize", null);
__decorate([
    Class.Public()
], Helper, "join", null);
__decorate([
    Class.Public()
], Helper, "resolve", null);
__decorate([
    Class.Public()
], Helper, "dirname", null);
__decorate([
    Class.Public()
], Helper, "basename", null);
__decorate([
    Class.Public()
], Helper, "extname", null);
Helper = __decorate([
    Class.Describe()
], Helper);
exports.Helper = Helper;
