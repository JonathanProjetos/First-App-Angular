"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const PeopleController_1 = __importDefault(require("../../../controllers/PeopleController"));
const PeopleService_1 = __importDefault(require("../../../services/PeopleService"));
(0, mocha_1.describe)('Testando a classe PeopleController', () => {
    const peopleService = new PeopleService_1.default();
    const peopleController = new PeopleController_1.default(peopleService);
    const res = {
        status: sinon_1.default.stub().returnsThis(),
        json: sinon_1.default.stub(),
        end: sinon_1.default.stub()
    };
    const req = {
        body: {
            email: 'test@test.com',
            name: 'Test'
        },
        params: {
            id: 1
        }
    };
    const responseBody = {
        id: 1,
        email: 'test@test.com',
        name: 'Test'
    };
    (0, mocha_1.describe)('Testando o método createPeople', () => {
        afterEach(() => sinon_1.default.restore());
        const stubCreatePeople = sinon_1.default.stub(peopleService, 'createPeople').resolves("ok");
        (0, mocha_1.it)('Deve criar uma pessoa com sucesso', async () => {
            await peopleController.createPeople(req, res);
            const { email, name } = req.body;
            (0, chai_1.expect)(res.status.calledWith(201)).to.be.true;
            sinon_1.default.assert.calledWithExactly(stubCreatePeople, { email, name });
        });
    });
    (0, mocha_1.describe)('Testando o método getAllPeople', () => {
        afterEach(() => sinon_1.default.restore());
        (0, mocha_1.it)('Deve retornar todas as pessoas com sucesso', async () => {
            sinon_1.default.stub(peopleService, 'getAllPeople').resolves([responseBody]);
            await peopleController.getAllPeople(req, res);
            (0, chai_1.expect)(res.status.calledWith(200)).to.be.true;
        });
    });
    (0, mocha_1.describe)('Testando o método deletePeople', () => {
        afterEach(() => sinon_1.default.restore());
        (0, mocha_1.it)('Deve deletar uma pessoa com sucesso', async () => {
            const stubDeletePeople = sinon_1.default.stub(peopleService, 'deletePeople');
            await peopleController.deletePeople(req, res);
            const { id } = req.params;
            sinon_1.default.assert.calledWithExactly(stubDeletePeople, id);
            (0, chai_1.expect)(res.status.calledWith(204)).to.be.true;
        });
    });
});
