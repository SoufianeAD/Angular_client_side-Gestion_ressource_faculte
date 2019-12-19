
import {Ressource} from './ressource.model';


export  class Pc  extends  Ressource {

  cpu: string;
  ram: string;
  stockage: string;
  hardDiskTech: string;
  constructor() {
    super();
  }
}
