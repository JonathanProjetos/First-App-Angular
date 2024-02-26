import { describe, it } from "mocha";
import { expect } from "chai";
import sinon from "sinon";
import PeopleController from "../../../controllers/PeopleController";
import PeopleService from "../../../services/PeopleService";
import type { Request, Response } from 'express';

describe('Testando a classe PeopleController', () => {

  const peopleService = new PeopleService()
  const peopleController = new PeopleController(peopleService)

  const res = {
    status: sinon.stub().returnsThis(),
    json: sinon.stub(),
    end: sinon.stub()
  }

  const req = {
    body: {
      email: 'test@test.com',
      name: 'Test'
    },
    params : {
      id: 1
    }
  }

  const responseBody = {
    id: 1,
    email: 'test@test.com',
    name: 'Test'
  }


  describe('Testando o método createPeople', () => {
    afterEach(() => sinon.restore())

    const stubCreatePeople = sinon.stub(peopleService, 'createPeople').resolves("ok")

    it('Deve criar uma pessoa com sucesso', async () => {
      
      await peopleController.createPeople(req as unknown as Request, res as unknown as Response)
      const { email, name } = req.body 

      expect(res.status.calledWith(201)).to.be.true
      sinon.assert.calledWithExactly(stubCreatePeople, {email, name})
    })
  })

  describe('Testando o método getAllPeople', () => {
    afterEach(() => sinon.restore())
    
    it('Deve retornar todas as pessoas com sucesso', async () => {

      sinon.stub(peopleService, 'getAllPeople').resolves([responseBody])

      await peopleController.getAllPeople(req as unknown as Request, res as unknown as Response)

      expect(res.status.calledWith(200)).to.be.true
    })
  })

  describe('Testando o método deletePeople', () => {
    afterEach(() => sinon.restore())

    
    it('Deve deletar uma pessoa com sucesso', async () => {
      const stubDeletePeople = sinon.stub(peopleService, 'deletePeople')

      await peopleController.deletePeople(req as unknown as Request, res as unknown as Response)

      const { id } = req.params

      sinon.assert.calledWithExactly(stubDeletePeople, id)
      expect(res.status.calledWith(204)).to.be.true
    })
  })
})