"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class People extends sequelize_1.Model {
}
People.init({
    id: {
        type: sequelize_1.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    modelName: "People",
    tableName: "peoples",
    sequelize: _1.default,
    underscored: true,
    timestamps: false,
});
exports.default = People;
