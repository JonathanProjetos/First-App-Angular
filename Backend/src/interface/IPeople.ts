import type { Request, Response } from 'express';

export interface IPeopleBodyInput {
  email: string;
  name: string;
}

export interface IPeopleBodyResponse {
  id: number;
  email: string;
  name: string;
}

export interface IPeopleController {
  createPeople: (req: Request, res: Response) => Promise<void>;
  getAllPeople: (req: Request, res: Response) => Promise<void>;
  deletePeople: (req: Request, res: Response) => Promise<void>;
}
