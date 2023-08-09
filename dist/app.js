"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = require("express");
const cors_1 = require("cors");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
//# sourceMappingURL=app.js.map