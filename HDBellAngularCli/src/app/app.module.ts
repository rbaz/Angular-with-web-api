import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DropdownModule } from '../../node_modules/angular-dropdown-component';
// import { TabModule } from 'angular-tabs-component';

import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ProjectComponent } from './project/project.component';
import { TicketComponent } from './ticket/ticket.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';


import { EmployeeService } from './shared/employee.service';
import { TicketService } from './shared/ticket.service';
import { DepartmentService } from './shared/department.service';
import { DdlDepartmentComponent } from './employee/ddl-department/ddl-department.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    ProjectComponent,
    TicketComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    ProjectListComponent,
    TicketListComponent,
    DdlDepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
    // DropdownModule
    // TabModule
  ],
  providers: [HttpClientModule, TicketService, EmployeeService, DepartmentService,
              ProjectComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
