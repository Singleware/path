/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';

import * as Path from '../source';

/**
 * Path normalize, test case.
 */
@Class.Describe()
export class Normalize extends Testing.Case {
  /**
   * Test of multiple slash character.
   */
  @Testing.Method()
  @Class.Public()
  public testMultipleSlashCharacter(): void {
    // Has no effect
    this.areSame(Path.normalize('/'), '/');
    // Has effect
    this.areSame(Path.normalize('A//B/C///D'), 'A/B/C/D');
    this.areSame(Path.normalize('A//B/C///D///'), 'A/B/C/D/');
    this.areSame(Path.normalize('///A//B/C////D'), '/A/B/C/D');
    this.areSame(Path.normalize('//A//B/C///D//'), '/A/B/C/D/');
    this.areSame(Path.normalize('///'), '/');
    this.areSame(Path.normalize('//'), '/');
  }

  /**
   * Test of current directory character.
   */
  @Testing.Method()
  @Class.Public()
  public testCurrentCharacter(): void {
    // Has no effect
    this.areSame(Path.normalize(''), '.');
    this.areSame(Path.normalize('./'), './');
    // Has effect
    this.areSame(Path.normalize('./././'), './');
    this.areSame(Path.normalize('./././A'), 'A');
    this.areSame(Path.normalize('././A/././B'), 'A/B');
    this.areSame(Path.normalize('././A/././../B'), 'B');
  }

  /**
   * Test of back character.
   */
  @Testing.Method()
  @Class.Public()
  public testBackCharacter(): void {
    // Has no effect
    this.areSame(Path.normalize('..'), '..');
    this.areSame(Path.normalize('..A'), '..A');
    this.areSame(Path.normalize('A..'), 'A..');
    this.areSame(Path.normalize('..A/B'), '..A/B');
    this.areSame(Path.normalize('..A/B..'), '..A/B..');
    this.areSame(Path.normalize('..A../B'), '..A../B');
    this.areSame(Path.normalize('../../../A/B'), '../../../A/B');
    // Has effect
    this.areSame(Path.normalize('../../A/../B'), '../../B');
    this.areSame(Path.normalize('/../../../A/B'), '/A/B');
    this.areSame(Path.normalize('A/../../B'), '../B');
    this.areSame(Path.normalize('A/../B'), 'B');
  }
}
