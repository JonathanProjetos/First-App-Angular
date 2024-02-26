"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const errorLauncher = (err, _req, res, _next) => {
    const [status, message] = err.message.split('|');
    if (err.message.split('').includes('|')) {
        res.status(Number(status)).json({ error: message });
    }
    else {
        console.error('Error não Mapeado: ', err);
        console.error('Error não Mapeado: ', err.message);
        res.status(500).json({ error: err.message });
    }
};
exports.default = errorLauncher;
