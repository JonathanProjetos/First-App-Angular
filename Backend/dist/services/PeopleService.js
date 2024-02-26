"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PeopleModel_1 = __importDefault(require("../database/models/PeopleModel"));
const joiInputPerson_1 = __importDefault(require("../middlewares/joiInputPerson"));
class PeopleService {
    db = PeopleModel_1.default;
    createPeople = async (body) => {
        const { email, name } = (0, joiInputPerson_1.default)(body);
        // Use o método findOne do modelo PeopleModel para verificar se o email já existe
        const existingPerson = await this.db.findOne({ where: { email } });
        if (existingPerson) {
            // Se o email já existe, retorne uma mensagem indicando isso
            throw new Error('409|Email already exists');
        }
        // Se o email não existe, crie uma nova pessoa e retorne uma mensagem de sucesso
        await this.db.create({ email, name });
        return 'Created successfully!';
    };
    getAllPeople = async () => {
        const peoples = await this.db.findAll();
        if (!peoples) {
            throw new Error('404|People not found');
        }
        return peoples;
    };
    deletePeople = async (id) => {
        const existingPerson = await this.db.findOne({ where: { id } });
        if (!existingPerson) {
            throw new Error('404|Person not found');
        }
        await this.db.destroy({ where: { id } });
        return 'Deleted successfully!';
    };
}
exports.default = PeopleService;
