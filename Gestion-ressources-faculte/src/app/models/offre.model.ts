import {DemandeOffre} from './demandeOffre.model';
import {Fournisseur} from './fournisseur.model';
import {Commande} from './commande.model';

export class Offre {
  date: Date  ;
  flag: boolean;
  offreFournisseur?: DemandeOffre ;
  fournisseur?: Fournisseur ;
  commande?: Commande;
  id?: number;
  constructor() {}
}
