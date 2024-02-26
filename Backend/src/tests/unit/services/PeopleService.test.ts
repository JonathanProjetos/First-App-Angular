import { describe, it } from "mocha";
import { expect } from "chai";
import sinon from "sinon";
import PeopleService from "../../../services/PeopleService";
import PeopleModel from "../../../database/models/PeopleModel";
import {IPeopleBodyResponse } from '../../../interface/IPeople'

describe('Testando a classe PeopleServices', () => {
  describe('Testando o método createPeople', () => {
    afterEach(() => sinon.restore())

    const inputBody = {
      email: 'test@test.com',
      name: 'Test'
    }

    const responseBody = {
      id: 1,
      email: 'test@test.com',
      name: 'Test'
    }

    const newPeople = new PeopleService()

    it('Quando o email já existe, deve retornar um erro', async () => {
      sinon
      .stub(PeopleModel, 'findOne')
      .resolves(responseBody as IPeopleBodyResponse as unknown as null)

      sinon.stub(PeopleModel, 'create').resolves(undefined)

      
      try {
        await newPeople.createPeople(inputBody)
      } catch (err:any) {
        expect(err.message).to.be.equal('409|Email already exists')
      }

    })

    it('Quando o email não existe, deve criar uma nova pessoa e retornar uma mensagem de sucesso', async () => {
      sinon
      .stub(PeopleModel, 'findOne')
      .resolves(null)

      sinon.stub(PeopleModel, 'create').resolves(undefined)

      const result = await newPeople.createPeople(inputBody)

      expect(result).to.be.equal('Created successfully!')
    })

  })

  describe('Testando o método getAllPeoples', () => {
    afterEach(() => sinon.restore())


    const responseBody = {
      id: 1,
      email: 'test@test.com',
      name: 'Test'
    }

    const newPeople = new PeopleService()

    it('Quando não existem pessoas, deve retornar um erro', async () => {
      sinon.stub(PeopleModel, 'findAll').resolves(undefined)

      try {
        await newPeople.getAllPeople()
      } catch (err:any) {
        expect(err.message).to.be.equal('404|People not found')
      }
    })

    it('Quando existem pessoas, deve retornar um array de pessoas', async () => {
      sinon.stub(PeopleModel, 'findAll').resolves([responseBody] as unknown as PeopleModel[])

      const result = await newPeople.getAllPeople()

      expect(result).to.be.deep.equal([responseBody as IPeopleBodyResponse])
    })
  })

  describe('Testando o método deletePeople', () => {
    afterEach(() => sinon.restore())

    const responseBody = {
      id: 1,
      email: 'test@test.com',
      name: 'Test'
    }

    const id = 1

    const newPeople = new PeopleService()

    it('Quando a pessoa não existe, deve retornar um erro', async () => {
      sinon.stub(PeopleModel, 'findOne').resolves(null)

      try {
        await newPeople.deletePeople(id)
      } catch (err:any) {
        expect(err.message).to.be.equal('404|Person not found')
      }
    })

    it('Quando a pessoa existe, deve deletar a pessoa e retornar uma mensagem de sucesso', async () => {
      sinon.stub(PeopleModel, 'findOne').resolves(responseBody as unknown as PeopleModel)

      sinon.stub(PeopleModel, 'destroy').resolves(undefined)

      const result = await newPeople.deletePeople(id)

      expect(result).to.be.equal('Deleted successfully!')
    })

  })
})