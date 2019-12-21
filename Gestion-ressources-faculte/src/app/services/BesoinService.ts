import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BesoinPc} from '../models/besoinPc.model';
import {BesoinPrinter} from '../models/besoinPrinter.model';

@Injectable()
export class BesoinService {
  besoinComputers: BesoinPc[] = [];
  besoinPrinters: BesoinPrinter[] = [];
  private BesoinPcSubject = new Subject<BesoinPc[]>() ;
  private BesoinPrinterSubject = new Subject<BesoinPrinter[]>() ;
  private URL = 'http://localhost:8080/besoin';
  constructor(private  http: HttpClient) {}

  /* emitSubject*/
  emitBesoinComputersSubject() {
    this.BesoinPcSubject.next(this.besoinComputers);
  }

  emitBesoinPrintersSubject() {
    this.BesoinPrinterSubject.next(this.besoinPrinters);
  }
  /* besoinComputerService*/
  createNewBesoinComputer(besoinPc: BesoinPc) {
    this.besoinComputers.push(besoinPc);
    this.emitBesoinComputersSubject();
    return this.http.post<boolean>(this.URL + '/addBesoinPC' , besoinPc ).subscribe(
      (data) => {
        this.getBesoinComputers();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getBesoinComputers() {
    this.http.get<BesoinPc[]>(this.URL + '/getAllBesoinPC').subscribe(
      (data) => {
        this.besoinComputers = data;
        this.emitBesoinComputersSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getBesoinComputerById(id: number) {
    const besoinComputer = this.besoinComputers.find(
      (bc) => {
        return bc.id === id;
      }
    );
    return besoinComputer;
  }

  deleteBesoinComputer(id: number) {
    const index = this.besoinComputers.indexOf(this.getBesoinComputerById(id));
    this.besoinComputers.splice(index, 1);
    this.emitBesoinComputersSubject();
    this.http.delete(this.URL + '/deleteBesoinPc/' + id)
      .subscribe(
        ()  => {
          this.getBesoinComputers();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }
  updateBesoinComputer(besoinPc: BesoinPc , id: number) {
    this.http
      .put<any>(this.URL + '/updateBesoin/' + id, besoinPc)
      .subscribe(
        () => {
          this.getBesoinComputers();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  /* besoinPrinterService*/

  createNewBesoinPrinter(besoinPrinter: BesoinPrinter) {
    this.besoinPrinters.push(besoinPrinter);
    this.emitBesoinPrintersSubject();
    return this.http.post<boolean>(this.URL + '/addBesoinPrinter' , besoinPrinter ).subscribe(
      (data) => {
        this.getBesoinPrinters();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getBesoinPrinters() {
    this.http.get<BesoinPrinter[]>(this.URL + '/getAllBesoinPrinter').subscribe(
      (data) => {
        this.besoinPrinters = data;
        this.emitBesoinPrintersSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getBesoinPrinterById(id: number) {
    const besoinPrinter = this.besoinPrinters.find(
      (bc) => {
        return bc.id === id;
      }
    );
    return besoinPrinter;
  }

  deleteBesoinPrinter(id: number) {
    const index = this.besoinPrinters.indexOf(this.getBesoinPrinterById(id));
    this.besoinPrinters.splice(index, 1);
    this.emitBesoinPrintersSubject();
    this.http.delete(this.URL + '/deleteBesoinPrinter/' + id)
      .subscribe(
        ()  => {
          this.getBesoinPrinters();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }
  updateBesoinPrinter(besoinPrinter: BesoinPrinter , id: number) {
    this.http
      .put<any>(this.URL + '/updateBesoin/' + id, besoinPrinter)
      .subscribe(
        () => {
          this.getBesoinPrinters();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
