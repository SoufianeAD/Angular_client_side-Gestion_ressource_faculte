import {User} from './user.model';

export  class Departement {
  id?: number;
  nom: string ;
  users?: User[];
  constructor() {}
}
