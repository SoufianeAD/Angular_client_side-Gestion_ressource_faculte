import {Panne} from './panne.model';
import {Fournisseur} from './fournisseur.model';
import {User} from './user.model';

export class  Ressource {

  marque: string ;
  fournisseur?: Fournisseur;
  id?: number ;
  pannes?: Panne[];
  user?: User;
  constructor() {}
}
