import People from '../database/models/PeopleModel';
import { IPeopleBodyInput, IPeopleBodyResponse } from '../interface/IPeople';
import verifyInputPerson from '../middlewares/joiInputPerson';

class PeopleService {
  private db = People;

  public createPeople = async (body: IPeopleBodyInput): Promise<string | null> => {

    const { email, name } = verifyInputPerson(body);
    
    // Use o método findOne do modelo PeopleModel para verificar se o email já existe
    const existingPerson = await this.db.findOne({ where: { email } });
    
    if (existingPerson) {
      // Se o email já existe, retorne uma mensagem indicando isso
      throw new Error('409|Email already exists');
    }
      // Se o email não existe, crie uma nova pessoa e retorne uma mensagem de sucesso
    await this.db.create({ email, name });

    return 'Created successfully!'
  }

  public getAllPeople = async (): Promise<IPeopleBodyResponse[]> => {
    const peoples = await this.db.findAll();

    if (!peoples) {
      throw new Error('404|People not found');
    }

    return peoples as unknown as IPeopleBodyResponse[];
  }

  public deletePeople = async (id: number): Promise<string> => {
    const existingPerson = await this.db.findOne({ where: { id } });

    if (!existingPerson) {
      throw new Error('404|Person not found');
    }

    await this.db.destroy({ where: { id } });

    return 'Deleted successfully!';
  }
}

export default PeopleService;