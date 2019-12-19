import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewConstatComponent} from './constat/new-constat/new-constat.component';
import {NewCommandComponent} from './command/new-command/new-command.component';
import {NewDepartmentComponent} from './department/new-department/new-department.component';
import {SignUpSupplierComponent} from './supplier/sign-up-supplier/sign-up-supplier.component';
import {NewUserComponent} from './user/new-user/new-user.component';
import {NewBreakdownComponent} from './breakdown/new-breakdown/new-breakdown.component';
import {NewComputerComponent} from './computer/new-computer/new-computer.component';
import {NewPrinterComponent} from './printer/new-printer/new-printer.component';
import {NewComputerNeedComponent} from './need/new-computer-need/new-computer-need.component';
import {NewPrinterNeedComponent} from './need/new-printer-need/new-printer-need.component';
import {NewPrinterAssignmentComponent} from './assignement/new-printer-assignment/new-printer-assignment.component';
import {NewComputerAssignmentComponent} from './assignement/new-computer-assignment/new-computer-assignment.component';
import {NewComputerOfferDemandComponent} from './computer-offer-demand/new-computer-offer-demand/new-computer-offer-demand.component';
import {NewPrinterOfferDemandComponent} from './printer-offer-demand/new-printer-offer-demand/new-printer-offer-demand.component';
import {NewComputerOfferComponent} from './computer-offer/new-computer-offer/new-computer-offer.component';
import {NewPrinterOfferComponent} from './printer-offer/new-printer-offer/new-printer-offer.component';
import {UserComponent} from './user/user.component';
import {SupplierComponent} from './supplier/supplier.component';
import {DepartmentComponent} from './department/department.component';
import {ComputerComponent} from './computer/computer.component';
import {PrinterComponent} from './printer/printer.component';
import {BreakdownComponent} from './breakdown/breakdown.component';
import {ComputerNeedComponent} from './need/computer-need/computer-need.component';
import {PrinterNeedComponent} from './need/printer-need/printer-need.component';
import {LogInComponent} from './log-in/log-in.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'new-command', component: NewCommandComponent},
  { path: 'new-constat', component: NewConstatComponent},
  { path: 'new-department', component: NewDepartmentComponent},
  { path: 'sign-up-supplier', component: SignUpSupplierComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'new-breakdown', component: NewBreakdownComponent },
  { path: 'new-computer', component: NewComputerComponent},
  { path: 'new-printer', component: NewPrinterComponent},
  { path: 'new-computer-need', component: NewComputerNeedComponent},
  { path: 'new-printer-need', component: NewPrinterNeedComponent},
  { path: 'new-computer-assignment', component: NewComputerAssignmentComponent},
  { path: 'new-printer-assignment', component: NewPrinterAssignmentComponent},
  { path: 'new-computer-offer-demand', component: NewComputerOfferDemandComponent },
  { path: 'new-printer-offer-demand', component: NewPrinterOfferDemandComponent },
  { path: 'new-computer-offer', component: NewComputerOfferComponent },
  { path: 'new-printer-offer', component: NewPrinterOfferComponent },
  { path: 'users', component: UserComponent },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'computers', component: ComputerComponent },
  { path: 'printers', component: PrinterComponent },
  { path: 'breakdowns', component: BreakdownComponent },
  { path: 'computer-needs', component: ComputerNeedComponent },
  { path: 'printer-needs', component: PrinterNeedComponent },
  { path: 'login', component: LogInComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
