import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';


describe('EmployeeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HDBellAnularCli'`, () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.componentInstance;
    expect(app.employeeService).toEqual('HDBellAnularCli');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('HDBellAnularCli app is running!');
  });
});
