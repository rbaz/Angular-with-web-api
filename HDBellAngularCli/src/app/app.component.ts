import { Component } from '@angular/core';
import { Ticket } from './shared/ticket';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HDBellAnularCli';
}