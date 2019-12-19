import {Besoin} from './besoin.model';
import {Offre} from './offre.model';

export class DemandeOffre {

  date: Date  ;
  flag: boolean;
  besoins?: Besoin[];
  offres?: Offre[] ;
  id?: number;

  constructor() {}
}
