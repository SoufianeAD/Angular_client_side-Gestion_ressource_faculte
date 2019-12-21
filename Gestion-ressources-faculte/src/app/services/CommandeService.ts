import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Commande} from '../models/commande.model';

@Injectable()
export class CommandeService {
  commandes: Commande[] = [];
  commandeSubject = new Subject<Commande[]>() ;
  private URL = 'http://localhost:8080/commande';
  constructor(private  http: HttpClient) {}
  emitCommandeSubject() {
    this.commandeSubject.next(this.commandes);
  }


  createNewCommande(cmd: Commande) {
    this.commandes.push(cmd);
    this.emitCommandeSubject();
    return this.http.post<boolean>(this.URL + '/addCommande' , cmd ).subscribe(
      (data) => {
        this.getCommandes();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getCommandes() {
    this.http.get<Commande[]>(this.URL + '/getAllCommands').subscribe(
      (data) => {
        this.commandes = data;
        this.emitCommandeSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getBesoinCommandeById(id: number) {
    const cmd = this.commandes.find(
      (bc) => {
        return bc.id === id;
      }
    );
    return cmd;
  }

  deleteCommande(id: number) {
    const index = this.commandes.indexOf(this.getBesoinCommandeById(id));
    this.commandes.splice(index, 1);
    this.emitCommandeSubject();
    this.http.delete(this.URL + '/deleteCommande/' + id)
      .subscribe(
        ()  => {
          this.getCommandes();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }
  updateCommande(besoinPc: Commande , id: number) {
    this.http
      .put<any>(this.URL + '/updateCommande/' + id, besoinPc)
      .subscribe(
        () => {
          this.getCommandes();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
