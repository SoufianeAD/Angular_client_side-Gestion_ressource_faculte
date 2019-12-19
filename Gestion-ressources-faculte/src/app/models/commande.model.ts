import {Offre} from './offre.model';

export class Commande {
  date: Date  ;
  delivery: boolean;
  offre?: Offre ;
  id?: number;
  constructor( ) {}
}
