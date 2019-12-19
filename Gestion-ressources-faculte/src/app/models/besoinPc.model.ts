import {Besoin} from './besoin.model';


export class BesoinPc extends  Besoin {
  cpu: string ;
  ram: string ;
  stockage: string ;

  constructor( ) {
    super();
  }
}
