import PeopleService from "../services/PeopleService";
import { IPeopleController } from '../interface/IPeople'
import type { Request, Response } from 'express';

class PeopleController implements IPeopleController {
  constructor(private peopleService:PeopleService) {}

  public createPeople = async (req: Request, res: Response) => {
    const { email, name } = req.body;

    const result = await this.peopleService.createPeople({ email, name});

    res.status(201).json({ message: result });
  }

  public getAllPeople = async (_req: Request, res: Response) => {
    const peoples = await this.peopleService.getAllPeople();

    res.status(200).json(peoples);
  }

  public deletePeople = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.peopleService.deletePeople(Number(id));

    res.status(204).end();
  }
}

export default PeopleController;