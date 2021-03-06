import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConstatComponent } from './constat/constat.component';
import {NewConstatComponent} from './constat/new-constat/new-constat.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CommandComponent } from './command/command.component';
import { NewCommandComponent } from './command/new-command/new-command.component';
import { NeedComponent } from './need/need.component';
import { DepartmentComponent } from './department/department.component';
import { NewDepartmentComponent } from './department/new-department/new-department.component';
import { SignUpSupplierComponent } from './supplier/sign-up-supplier/sign-up-supplier.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { NewBreakdownComponent } from './breakdown/new-breakdown/new-breakdown.component';
import { ComputerComponent } from './computer/computer.component';
import { NewComputerComponent } from './computer/new-computer/new-computer.component';
import { PrinterComponent } from './printer/printer.component';
import { NewPrinterComponent } from './printer/new-printer/new-printer.component';
import { NewComputerNeedComponent } from './need/new-computer-need/new-computer-need.component';
import { NewPrinterNeedComponent } from './need/new-printer-need/new-printer-need.component';
import { AssignementComponent } from './assignement/assignement.component';
import { NewPrinterAssignmentComponent } from './assignement/new-printer-assignment/new-printer-assignment.component';
import { NewComputerAssignmentComponent } from './assignement/new-computer-assignment/new-computer-assignment.component';
import { ComputerOfferDemandComponent } from './computer-offer-demand/computer-offer-demand.component';
import { NewComputerOfferDemandComponent } from './computer-offer-demand/new-computer-offer-demand/new-computer-offer-demand.component';
import { PrinterOfferDemandComponent } from './printer-offer-demand/printer-offer-demand.component';
import { NewPrinterOfferDemandComponent } from './printer-offer-demand/new-printer-offer-demand/new-printer-offer-demand.component';
import { ComputerOfferComponent } from './computer-offer/computer-offer.component';
import { NewComputerOfferComponent } from './computer-offer/new-computer-offer/new-computer-offer.component';
import { PrinterOfferComponent } from './printer-offer/printer-offer.component';
import { NewPrinterOfferComponent } from './printer-offer/new-printer-offer/new-printer-offer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ComputerNeedComponent } from './need/computer-need/computer-need.component';
import { PrinterNeedComponent } from './need/printer-need/printer-need.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { HeadImgComponent } from './home/head-img/head-img.component';
import { DepartmentAssignComponent } from './assignement/department-assign/department-assign.component';
import { StaffAssignComponent } from './assignement/staff-assign/staff-assign.component';
import {RessourceService} from './services/RessourceService';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/UserService';
import { ComputerBreakdownComponent } from './breakdown/computer-breakdown/computer-breakdown.component';
import { PrinterBreakdownComponent } from './breakdown/printer-breakdown/printer-breakdown.component';
import {DepartementService} from './services/DepartementService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewConstatComponent,
    ConstatComponent,
    SupplierComponent,
    CommandComponent,
    NewCommandComponent,
    NeedComponent,
    DepartmentComponent,
    NewDepartmentComponent,
    SignUpSupplierComponent,
    UserComponent,
    NewUserComponent,
    BreakdownComponent,
    NewBreakdownComponent,
    ComputerComponent,
    NewComputerComponent,
    PrinterComponent,
    NewPrinterComponent,
    NewComputerNeedComponent,
    NewPrinterNeedComponent,
    AssignementComponent,
    NewPrinterAssignmentComponent,
    NewComputerAssignmentComponent,
    ComputerOfferDemandComponent,
    NewComputerOfferDemandComponent,
    PrinterOfferDemandComponent,
    NewPrinterOfferDemandComponent,
    ComputerOfferComponent,
    NewComputerOfferComponent,
    PrinterOfferComponent,
    NewPrinterOfferComponent,
    SideNavComponent,
    ComputerNeedComponent,
    PrinterNeedComponent,
    LogInComponent,
    HomeComponent,
    HeadImgComponent,
    DepartmentAssignComponent,
    StaffAssignComponent,
    ComputerBreakdownComponent,
    PrinterBreakdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RessourceService,
    UserService,
    DepartementService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DepartmentAssignComponent,
    StaffAssignComponent,
    ComputerBreakdownComponent,
    PrinterBreakdownComponent
  ]
})
export class AppModule { }
