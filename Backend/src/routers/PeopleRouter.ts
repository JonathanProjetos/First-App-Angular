import { Router } from "express";
import PeopleController from "../controllers/PeopleController";
import PeopleService from "../services/PeopleService";

const peopleRouter = Router();

const peopleService = new PeopleService();
const peopleController = new PeopleController(peopleService);

peopleRouter.post('/peoples', peopleController.createPeople);
peopleRouter.get('/peoples', peopleController.getAllPeople);
peopleRouter.delete('/peoples/:id', peopleController.deletePeople);


export default peopleRouter;
