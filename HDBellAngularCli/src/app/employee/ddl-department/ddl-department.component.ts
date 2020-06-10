import { Component, OnInit } from '@angular/core';
import { Department } from '../../shared/department';
import { DepartmentService } from '../../shared/department.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ddl-department',
  templateUrl: './ddl-department.component.html',
  styleUrls: ['./ddl-department.component.css']
})

export class DdlDepartmentComponent implements OnInit {

  constructor(departmentService: DepartmentService) {
    this.departments = departmentService.getDepartments();
    this.selectedDepartment = this.departments(0).departmentId;
  }

  selectedDepartment: Department = new Department();
  departments: any;
  // tslint:disable-next-line: variable-name
  _departmentService: DepartmentService;


  ngOnInit(): void {
  }

  getAllDepartment(){
    return this._departmentService.getDepartments();
  }

  onSelect(departmentId) {
    this.selectedDepartment = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.departments.length; i++)
    {
      // tslint:disable-next-line: triple-equals
      if (this.departments[i].DepartmentId == departmentId) {
        this.selectedDepartment = this.departments[i];
      }
    }
  }

}
