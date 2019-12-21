import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Constat} from '../models/constat.model';
import {Pc} from '../models/pc.model';
import {Printer} from '../models/printer.model';

@Injectable()
export class ConstatService {
  constats: Constat[] = [];
  constatSubject = new Subject<Constat[]>() ;
  private URL = 'http://localhost:8080/constat';
  constructor(private  http: HttpClient) {}
  emitCommandeSubject() {
    this.constatSubject.next(this.constats);
  }


  createNewConstat(constat: Constat) {
    this.constats.push(constat);
    this.emitCommandeSubject();
    return this.http.post<boolean>(this.URL + '/addConstat' , constat ).subscribe(
      (data) => {
        this.getConstats();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }


  getConstats() {
    this.http.get<Constat[]>(this.URL + '/getAllCommands').subscribe(
      (data) => {
        this.constats = data;
        this.emitCommandeSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getBesoinCommandeById(id: number) {
    const cmd = this.constats.find(
      (bc) => {
        return bc.id === id;
      }
    );
    return cmd;
  }

  deleteCommande(id: number) {
    const index = this.constats.indexOf(this.getBesoinCommandeById(id));
    this.constats.splice(index, 1);
    this.emitCommandeSubject();
    this.http.delete(this.URL + '/deleteCommande/' + id)
      .subscribe(
        ()  => {
          this.getConstats();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }
  updateCommande(besoinPc: Constat , id: number) {
    this.http
      .put<any>(this.URL + '/updateCommande/' + id, besoinPc)
      .subscribe(
        () => {
          this.getConstats();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
