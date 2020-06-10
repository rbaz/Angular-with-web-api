import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Ticket } from './ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  formData  : Ticket;
  list : Ticket[];
  readonly rootURL ="http://localhost:62406/api"

  constructor(private http : HttpClient) { }

  postTicket(formData : Ticket){
   return this.http.post(this.rootURL+'/Ticket',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/Ticket/allticketdetails')
    .toPromise().then(res => this.list = res as Ticket[]);
  }

  putTicket(formData : Ticket){
    return this.http.put(this.rootURL+'/Ticket/'+formData.TicketId,formData);
     
   }

   deleteTicket(id : number){
    return this.http.delete(this.rootURL+'/Ticket/'+id);
   }
}
