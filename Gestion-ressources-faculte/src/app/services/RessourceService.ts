import {Observable, Subject} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Pc} from '../models/pc.model';
import {Printer} from '../models/printer.model';


@Injectable()
export  class RessourceService {

  computers: Pc[] = [];
  printers: Printer[] = [];
  pcSubject = new Subject<Pc[]>() ;

  printerSubject = new Subject<Printer[]>() ;
  private computerUrl = 'http://localhost:8080/resources/computers';
  private printerUrl = 'http://localhost:8080/resources/printers';
  constructor(private  http: HttpClient) {}

  /* emitSubject*/
  emitPcSubject() {
    this.pcSubject.next(this.computers);
  }

  emitPrintersSubject() {
    this.printerSubject.next(this.printers);
  }

  /* computerService*/
  createNewComputer(pc: Pc) {
    this.computers.push(pc);
    this.emitPcSubject();
    return this.http.post<boolean>(this.computerUrl + '/add' , pc ).subscribe(
      (data) => {
        this.getComputers();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getComputers() {
    this.http.get<Pc[]>(this.computerUrl + '/all').subscribe(
      (data: Pc[]) => {
        this.computers = data;
        this.emitPcSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getComputerById(id: number) {
    const computer = this.computers.find(
      (pc) => {
        return pc.id === id;
      }
    );
    return computer;
  }
  deleteComputer(id: number) {
    const index = this.computers.indexOf(this.getComputerById(id));
    this.computers.splice(index, 1);
    this.emitPcSubject();
    this.http.delete(this.computerUrl + '/delete/' + id)
      .subscribe(
        ()  => {
          this.getComputers();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updateComputer(computer: Pc) {
    this.http
      .put<any>(this.computerUrl + '/update', computer)
      .subscribe(
        () => {
          this.getComputers();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getAllComputers() {
    this.getComputers();
    return this.computers;
  }
  /* printerService*/
  createNewPrinter(printer: Printer) {
    this.printers.push(printer);
    this.emitPrintersSubject();
    return this.http.post<boolean>(this.printerUrl + '/add' , printer ).subscribe(
      (data) => {
        this.getPrinters();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getPrinters() {
    this.http.get<Printer[]>(this.printerUrl + '/all').subscribe(
      (data) => {
        this.printers = data;
        this.emitPrintersSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getPrinterById(id: number) {
    const printer = this.printers.find(
      (p) => {
        return p.id === id;
      }
    );
    return printer;
  }
  deletePrinter(id: number) {
    const index = this.printers.indexOf(this.getPrinterById(id));
    this.printers.splice(index, 1);
    this.emitPrintersSubject();
    this.http.delete(this.printerUrl + '/delete/' + id)
      .subscribe(
        ()  => {
          this.getPrinters();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updatePrinter(printer: Printer) {
    this.http
      .put<any>(this.printerUrl + '/update', printer)
      .subscribe(
        () => {
          this.getPrinters();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getAllPrinter() {
    this.getPrinters();
    return this.printers;
  }


}
