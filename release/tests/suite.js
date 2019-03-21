"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Testing = require("@singleware/testing");
const normalize_spec_1 = require("./normalize.spec");
const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();
// Test cases.
suite.addCase(normalize_spec_1.Normalize);
(async function () {
    const report = await suite.perform();
    logger.print(report);
    process.exitCode = report.errors > 0 ? 1 : 0;
})();
