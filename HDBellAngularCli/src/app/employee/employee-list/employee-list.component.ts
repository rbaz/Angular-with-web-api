import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/shared/department.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

   constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.refreshList();
  }

  populateForm(emp: Employee) {
    this.employeeService.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.employeeService.deleteEmployee(id).subscribe(res => {
        this.employeeService.refreshList();
      });
    }
  }

}
