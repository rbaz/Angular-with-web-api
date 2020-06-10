import { Department } from './../shared/department';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService,
              private departmentService: DepartmentService) {

    this.loadDepartments();

  }

  departments: Array<Department>;
  selectedDepartmentId = '';

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.employeeService.formData = {
      EmployeeId: null,
      Name: '',
      DepartmentId: null
      };
  }

  loadDepartments() {
    return this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

  // event handler for the select element's change event
  selectChangeHandler(event: any) {
    // update the ui
    this.selectedDepartmentId = String(event.target.value);
    this.employeeService.formData.DepartmentId = event.target.value;
  }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeId == null) {
      form.value.DepartmentId = Number(this.selectedDepartmentId);
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.employeeService.postEmployee(form.value).subscribe(() => {
      // this.employeeService.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.employeeService.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.employeeService.putEmployee(form.value).subscribe(() => {
      // this.employeeService.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.employeeService.refreshList();
    });

  }

}
