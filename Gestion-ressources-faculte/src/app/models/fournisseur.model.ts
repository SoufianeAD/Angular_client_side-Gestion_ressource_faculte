

import {User} from './user.model';
import {Offre} from './offre.model';

export class Fournisseur extends  User {

  company: string;
  tel: string;
  offres?: Offre[];
  constructor() {
    super();
  }
}
