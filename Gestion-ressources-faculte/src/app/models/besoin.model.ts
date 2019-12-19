import {User} from './user.model';
import {DemandeOffre} from './demandeOffre.model';

export class Besoin {

  date: Date  ;
  flag: boolean;
  userBesoin: User ;
  demandeOffre: DemandeOffre;
  id?: number;
  constructor() {}
}
