import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor( private http: HttpClient) { }

  createFund(body: {}): Observable<any>{
    return this.http.post("https://evening-tundra-04733.herokuapp.com/funds", body);
  }

  getFunds(): Observable<any>{
    return this.http.get("https://evening-tundra-04733.herokuapp.com/funds");
  }

  updateFund(body: {}, id: number): Observable<any>{
    return this.http.put("https://evening-tundra-04733.herokuapp.com/funds/"+id, body);
  }

  deleteFund(id: number): void{
    this.http.delete("https://evening-tundra-04733.herokuapp.com/funds/"+id);
  }
}
