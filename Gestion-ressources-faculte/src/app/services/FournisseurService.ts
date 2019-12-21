import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Fournisseur} from '../models/fournisseur.model';

@Injectable()
export class FournisseurService {
  fournisseurs: Fournisseur[] = [];
  fournisseurSubject = new Subject<Fournisseur[]>() ;
  url = 'http://localhost:8080/fournisseur';
  constructor(private  http: HttpClient) {}
  /* emitSubject*/
  emitFournisseurSubject() {
    this.fournisseurSubject.next(this.fournisseurs);
  }



  createNewFournisseur(fournisseur: Fournisseur) {
    this.fournisseurs.push(fournisseur);
    this.emitFournisseurSubject();
    return this.http.post<boolean>(this.url + '/addFournisseur' , fournisseur ).subscribe(
      (data) => {
        this.getFournisseurs();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getFournisseurs() {
    this.http.get<Fournisseur[]>(this.url + '/getAllfournisseur').subscribe(
      (data) => {
        this.fournisseurs = data;
        this.emitFournisseurSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getFournisseurById(id: number) {
    const fournisseur = this.fournisseurs.find(
      (dm) => {
        return dm.id === id;
      }
    );
    return fournisseur;
  }
  deleteFournisseur(id: number) {
    const index = this.fournisseurs.indexOf(this.getFournisseurById(id));
    this.fournisseurs.splice(index, 1);
    this.emitFournisseurSubject();
    this.http.delete(this.url + '/deleteFournisseur/' + id)
      .subscribe(
        ()  => {
          this.getFournisseurs();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }
  updateFournisseur(fournisseur: Fournisseur, id: number) {
    this.http
      .put<any>(this.url + '/updateFournisseur/' + id, fournisseur)
      .subscribe(
        () => {
          this.getFournisseurs();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
