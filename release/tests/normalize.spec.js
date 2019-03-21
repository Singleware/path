"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Testing = require("@singleware/testing");
const Path = require("../source");
/**
 * Path normalize, test case.
 */
let Normalize = class Normalize extends Testing.Case {
    /**
     * Test of multiple slash character.
     */
    testMultipleSlashCharacter() {
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
    testCurrentCharacter() {
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
    testBackCharacter() {
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
};
__decorate([
    Testing.Method(),
    Class.Public()
], Normalize.prototype, "testMultipleSlashCharacter", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Normalize.prototype, "testCurrentCharacter", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Normalize.prototype, "testBackCharacter", null);
Normalize = __decorate([
    Class.Describe()
], Normalize);
exports.Normalize = Normalize;
