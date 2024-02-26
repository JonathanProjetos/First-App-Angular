"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const PeopleRouter_1 = __importDefault(require("./routers/PeopleRouter"));
const errorLauncher_1 = __importDefault(require("./middlewares/errorLauncher"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 3001;
app.use('/', PeopleRouter_1.default);
app.use(errorLauncher_1.default);
app.listen(PORT, () => {
    console.log('Server is running on port 3001');
});
exports.default = app;
