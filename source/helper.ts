/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

/**
 * Path helper class.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * Path separator.
   */
  @Class.Public()
  public static separator = '/';

  /**
   * Normalizes the specified path.
   * @param path Path to be normalized.
   * @return Returns the normalized path.
   */
  @Class.Public()
  public static normalize(path: string): string {
    if (path.length > 0) {
      const pieces = path.split(this.separator);
      const length = pieces.length;
      const newer = <string[]>[];
      let last;
      for (let offset = 0; offset < length; ++offset) {
        const part = pieces[offset];
        if (newer.length === 0) {
          newer.push((last = part));
        } else if (part !== '.') {
          if (part === '..' && part !== last) {
            if (last !== '') {
              newer.pop();
              last = newer[newer.length - 1];
            }
          } else if (part.length > 0) {
            if (last === '.') {
              newer[newer.length - 1] = last = part;
            } else {
              newer.push((last = part));
            }
          } else if (offset + 1 === length) {
            newer.push((last = part));
          }
        }
      }
      return newer.join(this.separator);
    }
    return '.';
  }

  /**
   * Join the specified path list.
   * @param paths Path list.
   * @returns Returns the joined path.
   */
  @Class.Public()
  public static join(...paths: string[]): string {
    return this.normalize(paths.filter((value: string) => value.length).join(this.separator));
  }

  /**
   * Resolves the last absolute path.
   * @param paths Path list.
   * @returns Returns the resolved path.
   */
  @Class.Public()
  public static resolve(...paths: string[]): string {
    let resolved = '';
    for (const path of paths) {
      resolved = path[0] === this.separator ? this.normalize(path) : this.join(resolved, path);
    }
    return resolved;
  }

  /**
   * Gets the directory path of the specified path.
   * @param path Path for extraction.
   * @returns Returns the directory path.
   */
  @Class.Public()
  public static dirname(path: string): string {
    const normalized = this.normalize(path);
    return normalized.substr(0, normalized.lastIndexOf(this.separator));
  }

  /**
   * Gets the directory name of the specified path.
   * @param path Path for extraction.
   * @returns Returns the directory name.
   */
  @Class.Public()
  public static basename(path: string): string {
    const normalized = this.normalize(path);
    return normalized.substr(normalized.lastIndexOf(this.separator) + 1);
  }

  /**
   * Gets the extension name of the specified path.
   * @param path Path for extraction.
   * @returns Returns the extension name.
   */
  @Class.Public()
  public static extname(path: string): string {
    const base = this.basename(path);
    return base[0] === '.' ? '' : base.substr(base.lastIndexOf('.') + 1);
  }
}
