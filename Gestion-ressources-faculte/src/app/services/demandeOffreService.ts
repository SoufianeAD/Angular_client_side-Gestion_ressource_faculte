import {Injectable} from '@angular/core';
import {Pc} from "../models/pc.model";
import {Printer} from "../models/printer.model";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DemandeOffre} from "../models/demandeOffre.model";

@Injectable()
export class DemandeOffreService {
  demandeOffres: DemandeOffre[] = [];
  demandeOffreSubject = new Subject<DemandeOffre[]>() ;
  url = 'http://localhost:8080/demandeOffre';
  constructor(private  http: HttpClient) {}

  /* emitSubject*/
  emitDemandeOffreSubject() {
    this.demandeOffreSubject.next(this.demandeOffres);
  }

  createNewDemandeOffre(demandeOffres: DemandeOffre) {
    this.demandeOffres.push(demandeOffres);
    this.emitDemandeOffreSubject();
    return this.http.post<boolean>(this.url + '/addDemandeOffre' , demandeOffres ).subscribe(
      (data) => {
        this.getDemandeOffres();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getDemandeOffres() {
    this.http.get<DemandeOffre[]>(this.url + '/getAllDemandeOffre').subscribe(
      (data) => {
        this.demandeOffres = data;
        this.emitDemandeOffreSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getDemandeOffreById(id: number) {
    const demandeOffre = this.demandeOffres.find(
      (dm) => {
        return dm.id === id;
      }
    );
    return demandeOffre;
  }
  deleteComputer(id: number) {
    const index = this.demandeOffres.indexOf(this.getDemandeOffreById(id));
    this.demandeOffres.splice(index, 1);
    this.emitDemandeOffreSubject();
    this.http.delete(this.url + '/deleteDemandeOffre/' + id)
      .subscribe(
        ()  => {
          this.getDemandeOffres();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updateComputer(demandeOffre: DemandeOffre, id: number) {
    this.http
      .put<any>(this.url + '/updateDemandeOffre/' + id, demandeOffre)
      .subscribe(
        () => {
          this.getDemandeOffres();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }



}
