import {Ressource} from './ressource.model';
import {Constat} from './constat.model';

export class Panne {
  datePanne: Date ;
  typePanne: string ;
  frequence: string ;
  description: string;
  ressource: Ressource;
  constat: Constat ;
  id?: number;
  constructor() {}
}
