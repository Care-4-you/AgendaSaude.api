"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDB = void 0;
const mongoose_1 = require("mongoose");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
mongoose_1.default.set("strictQuery", false);
if (process.env.ACCESS_DB) {
    mongoose_1.default.connect(process.env.ACCESS_DB);
}
exports.connectionDB = mongoose_1.default.connection;
//# sourceMappingURL=dbConnect.js.map