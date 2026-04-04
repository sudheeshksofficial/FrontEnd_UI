import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Employees } from '../models/employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService{

   private apiUrl = 'http://localhost:3000/employees';


  constructor(private httpData: HttpClient) {}

  getData(): Observable<Employees[]> {
    return this.httpData.get<Employees[]>(this.apiUrl);
  }



}
