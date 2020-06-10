import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlDepartmentComponent } from './ddl-department.component';

describe('DdlDepartmentComponent', () => {
  let component: DdlDepartmentComponent;
  let fixture: ComponentFixture<DdlDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdlDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdlDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
