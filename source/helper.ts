/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

/**
 * Path helper class.
 */
@Class.Describe()
export class Helper {
  /**
   * Path separator.
   */
  @Class.Public()
  public static separator: string = '/';

  /**
   * Normalizes the specified path.
   * @param path Path to be normalized.
   * @return Returns the normalized path.
   */
  @Class.Public()
  public static normalize(path: string): string {
    const pieces = path.split(this.separator);
    const newer = [];
    for (let i = 0; i < pieces.length; ++i) {
      const directory = pieces[i];
      if (i === 0 || i + 1 === pieces.length || (directory.length && directory !== '.')) {
        if (directory === '..') {
          newer.pop();
        } else {
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
  @Class.Public()
  public static join(...paths: string[]): string {
    return this.normalize(paths.join(this.separator));
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
      resolved = path[0] === this.separator ? path : this.join(resolved, path);
    }
    return resolved;
  }

  /**
   * Gets the directory path of the specified path.
   * @param path Path of extraction.
   * @returns Returns the directory path.
   */
  @Class.Public()
  public static dirname(path: string) {
    const normalized = this.normalize(path);
    return normalized.substr(0, normalized.lastIndexOf(this.separator));
  }

  /**
   * Gets the directory name of the specified path.
   * @param path Path of extraction.
   * @returns Returns the directory path.
   */
  @Class.Public()
  public static basename(path: string) {
    const normalized = this.normalize(path);
    return normalized.substr(normalized.lastIndexOf(this.separator) + 1);
  }
}
