import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Panne} from '../models/panne.model';

@Injectable()
export class PanneService {
  pannes: Panne[] = [];
  panneSubject = new Subject<Panne[]>() ;
  url = 'http://localhost:8080/panne';
  constructor(private  http: HttpClient) {}
  /* emitSubject*/
  emitPanneSubject() {
    this.panneSubject.next(this.pannes);
  }



  createNewPanne(offre: Panne) {
    this.pannes.push(offre);
    this.emitPanneSubject();
    return this.http.post<boolean>(this.url + '/addPanne' , offre ).subscribe(
      (data) => {
        this.getPannes();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getPannes() {
    this.http.get<Panne[]>(this.url + '/getAllPanne').subscribe(
      (data) => {
        alert(data);
        this.pannes = data;
        this.emitPanneSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getPanneById(id: number) {
    const offre = this.pannes.find(
      (dm) => {
        return dm.id === id;
      }
    );
    return offre;
  }
  deletePanne(id: number) {
    const index = this.pannes.indexOf(this.getPanneById(id));
    this.pannes.splice(index, 1);
    this.emitPanneSubject();
    this.http.delete(this.url + '/deletePanne/' + id)
      .subscribe(
        ()  => {
          this.getPannes();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }
  updatePanne(offre: Panne, id: number) {
    this.http
      .put<any>(this.url + '/updatePanne/' + id, offre)
      .subscribe(
        () => {
          this.getPannes();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getallPannes() {
    this.getPannes();
    return this.pannes;
  }
}
