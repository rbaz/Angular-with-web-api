import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TicketService } from '../shared/ticket.service';
import { DepartmentService } from '../shared/department.service';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  constructor(public ticketService: TicketService,
              public  employeeService: EmployeeService,
              public departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.ticketService.refreshList();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.ticketService.formData = {
      TicketId: null,
      TDateCreation: null,
      TDescription: '',
      ProjectName: '',
      EmployeeId: null
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.TicketId == null) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.ticketService.postTicket(form.value).subscribe(() => {
      // this.ticketService.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.ticketService.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.ticketService.putTicket(form.value).subscribe(() => {
      // this.ticketService.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.ticketService.refreshList();
    });

  }

}
