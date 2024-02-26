"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const PeopleService_1 = __importDefault(require("../../../services/PeopleService"));
const PeopleModel_1 = __importDefault(require("../../../database/models/PeopleModel"));
(0, mocha_1.describe)('Testando a classe PeopleServices', () => {
    (0, mocha_1.describe)('Testando o método createPeople', () => {
        afterEach(() => sinon_1.default.restore());
        const inputBody = {
            email: 'test@test.com',
            name: 'Test'
        };
        const responseBody = {
            id: 1,
            email: 'test@test.com',
            name: 'Test'
        };
        const newPeople = new PeopleService_1.default();
        (0, mocha_1.it)('Quando o email já existe, deve retornar um erro', async () => {
            sinon_1.default
                .stub(PeopleModel_1.default, 'findOne')
                .resolves(responseBody);
            sinon_1.default.stub(PeopleModel_1.default, 'create').resolves(undefined);
            try {
                await newPeople.createPeople(inputBody);
            }
            catch (err) {
                (0, chai_1.expect)(err.message).to.be.equal('409|Email already exists');
            }
        });
        (0, mocha_1.it)('Quando o email não existe, deve criar uma nova pessoa e retornar uma mensagem de sucesso', async () => {
            sinon_1.default
                .stub(PeopleModel_1.default, 'findOne')
                .resolves(null);
            sinon_1.default.stub(PeopleModel_1.default, 'create').resolves(undefined);
            const result = await newPeople.createPeople(inputBody);
            (0, chai_1.expect)(result).to.be.equal('Created successfully!');
        });
    });
    (0, mocha_1.describe)('Testando o método getAllPeoples', () => {
        afterEach(() => sinon_1.default.restore());
        const responseBody = {
            id: 1,
            email: 'test@test.com',
            name: 'Test'
        };
        const newPeople = new PeopleService_1.default();
        (0, mocha_1.it)('Quando não existem pessoas, deve retornar um erro', async () => {
            sinon_1.default.stub(PeopleModel_1.default, 'findAll').resolves(undefined);
            try {
                await newPeople.getAllPeople();
            }
            catch (err) {
                (0, chai_1.expect)(err.message).to.be.equal('404|People not found');
            }
        });
        (0, mocha_1.it)('Quando existem pessoas, deve retornar um array de pessoas', async () => {
            sinon_1.default.stub(PeopleModel_1.default, 'findAll').resolves([responseBody]);
            const result = await newPeople.getAllPeople();
            (0, chai_1.expect)(result).to.be.deep.equal([responseBody]);
        });
    });
    (0, mocha_1.describe)('Testando o método deletePeople', () => {
        afterEach(() => sinon_1.default.restore());
        const responseBody = {
            id: 1,
            email: 'test@test.com',
            name: 'Test'
        };
        const id = 1;
        const newPeople = new PeopleService_1.default();
        (0, mocha_1.it)('Quando a pessoa não existe, deve retornar um erro', async () => {
            sinon_1.default.stub(PeopleModel_1.default, 'findOne').resolves(null);
            try {
                await newPeople.deletePeople(id);
            }
            catch (err) {
                (0, chai_1.expect)(err.message).to.be.equal('404|Person not found');
            }
        });
        (0, mocha_1.it)('Quando a pessoa existe, deve deletar a pessoa e retornar uma mensagem de sucesso', async () => {
            sinon_1.default.stub(PeopleModel_1.default, 'findOne').resolves(responseBody);
            sinon_1.default.stub(PeopleModel_1.default, 'destroy').resolves(undefined);
            const result = await newPeople.deletePeople(id);
            (0, chai_1.expect)(result).to.be.equal('Deleted successfully!');
        });
    });
});
