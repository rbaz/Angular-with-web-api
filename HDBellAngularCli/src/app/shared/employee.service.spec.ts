import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { DepartmentService } from './department.service';

// describe('EmployeeService', () => {
//   beforeEach(() => DepartmentService.configureTestingModule({}));

  it('should be created', () => {
    const employeeService: EmployeeService = TestBed.get(EmployeeService);
    expect(employeeService).toBeTruthy();
  });
//});