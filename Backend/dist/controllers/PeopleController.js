"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PeopleController {
    peopleService;
    constructor(peopleService) {
        this.peopleService = peopleService;
    }
    createPeople = async (req, res) => {
        const { email, name } = req.body;
        const result = await this.peopleService.createPeople({ email, name });
        res.status(201).json({ message: result });
    };
    getAllPeople = async (_req, res) => {
        const peoples = await this.peopleService.getAllPeople();
        res.status(200).json(peoples);
    };
    deletePeople = async (req, res) => {
        const { id } = req.params;
        await this.peopleService.deletePeople(Number(id));
        res.status(204).end();
    };
}
exports.default = PeopleController;
