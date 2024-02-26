"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PeopleController_1 = __importDefault(require("../controllers/PeopleController"));
const PeopleService_1 = __importDefault(require("../services/PeopleService"));
const peopleRouter = (0, express_1.Router)();
const peopleService = new PeopleService_1.default();
const peopleController = new PeopleController_1.default(peopleService);
peopleRouter.post('/peoples', peopleController.createPeople);
peopleRouter.get('/peoples', peopleController.getAllPeople);
peopleRouter.delete('/peoples/:id', peopleController.deletePeople);
exports.default = peopleRouter;
