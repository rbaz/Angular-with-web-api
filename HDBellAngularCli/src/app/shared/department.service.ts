import { Injectable } from '@angular/core';
import { Department } from './department';
import { HttpClient} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  formData: Department;
  list: Department[];
  listDepartments: Observable<Department[]>;
  readonly rootURL = 'http://localhost:62406/api';
  readonly url = 'http://localhost:62406/api/department';

  constructor(private http: HttpClient) { }

  postdepartment(formData: Department){
   return this.http.post(this.rootURL + '/Department', formData);

  }

  refreshList(){
    this.http.get(this.rootURL + '/department/alldepartmentdetails')
    .toPromise().then(res => this.list = res as Department[]);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url + '/alldepartmentdetails');
  }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        // tslint:disable-next-line: deprecation
        return Observable.throw(errMsg);
    }

  putdepartment(formData: Department){
    return this.http.put(this.rootURL + '/Department/' + formData.DepartmentId, formData);

   }

   deletedepartment(id: number){
    return this.http.delete(this.rootURL + '/Department/' + id);
   }
}
