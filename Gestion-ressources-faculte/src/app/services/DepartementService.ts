import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Departement} from '../models/departement.model';

@Injectable()
export class DepartementService {
  departements: Departement[] = [];
  departementSubject = new Subject<Departement[]>() ;

  url = 'http://localhost:8080/departement';
  constructor(private  http: HttpClient) {}

  /* emitSubject*/
  emitDepartementSubject() {
    this.departementSubject.next(this.departements);
  }

  createNewDepartement(departement: Departement) {
    this.departements.push(departement);
    this.emitDepartementSubject();
    return this.http.post<boolean>(this.url + '/addDepartement' , departement ).subscribe(
      (data) => {
        this.getDepartements();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getDepartements() {
    this.http.get<Departement[]>(this.url + '/getAllDepartement').subscribe(
      (data) => {
        this.departements = data;
        this.emitDepartementSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getDepartementById(id: number) {
    const departement = this.departements.find(
      (dm) => {
        return dm.id === id;
      }
    );
    return departement;
  }
  deleteDepartement(id: number) {
    const index = this.departements.indexOf(this.getDepartementById(id));
    this.departements.splice(index, 1);
    this.emitDepartementSubject();
    this.http.delete(this.url + '/deleteDepartement/' + id)
      .subscribe(
        ()  => {
          this.getDepartements();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updateDepartemnt(departement: Departement, id: number) {
    this.http
      .put<any>(this.url + '/updateDepartement/' + id, departement)
      .subscribe(
        () => {
          this.getDepartements();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getAllDep() {
    this.getDepartements();
    return this.departements;
  }
}
