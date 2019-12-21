import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Offre} from '../models/offre.model';

@Injectable()
export class OffreService {
  offres: Offre[] = [];
  offreSubject = new Subject<Offre[]>() ;
  url = 'http://localhost:8080/offre';
  constructor(private  http: HttpClient) {}
  /* emitSubject*/
  emitOffreSubject() {
    this.offreSubject.next(this.offres);
  }



  createNewOffre(offre: Offre) {
    this.offres.push(offre);
    this.emitOffreSubject();
    return this.http.post<boolean>(this.url + '/addOffre' , offre ).subscribe(
      (data) => {
        this.getOffres();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getOffres() {
    this.http.get<Offre[]>(this.url + '/getAllOffres').subscribe(
      (data) => {
        this.offres = data;
        this.emitOffreSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getOffreById(id: number) {
    const offre = this.offres.find(
      (dm) => {
        return dm.id === id;
      }
    );
    return offre;
  }
  deleteOffre(id: number) {
    const index = this.offres.indexOf(this.getOffreById(id));
    this.offres.splice(index, 1);
    this.emitOffreSubject();
    this.http.delete(this.url + '/deleteOffre/' + id)
      .subscribe(
        ()  => {
          this.getOffres();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }
  updateOffre(offre: Offre, id: number) {
    this.http
      .put<any>(this.url + '/updateOffre/' + id, offre)
      .subscribe(
        () => {
          this.getOffres();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
