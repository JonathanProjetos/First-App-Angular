"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const verifyInputPerson = (body) => {
    const schemaPerson = joi_1.default.object({
        email: joi_1.default.string().email().required().messages({
            'string.email': '404|Invalid email format',
            'any.required': '404|Email is required',
            'string.empty': '404|Email is required'
        }),
        name: joi_1.default.string().required().messages({
            'any.required': '404|Name is required',
            'string.empty': '404|Name is required'
        })
    });
    const { error, value } = schemaPerson.validate(body);
    if (error) {
        throw new Error(error.message);
    }
    return value;
};
exports.default = verifyInputPerson;
