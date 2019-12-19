import {Role} from './role.model';
import {Departement} from './departement.model';
import {Ressource} from './ressource.model';
import {Besoin} from './besoin.model';

export  class User {
  id?: number;
  username: string;
  pasword: string;
  email: string ;
  nom: string ;
  prenom: string ;
  enabled: boolean;
  roles: Role[];
  departement?: Departement;
  ressources: Ressource[];
  besoins: Besoin[];
  constructor() {}
}
