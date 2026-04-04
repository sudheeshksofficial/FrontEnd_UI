import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataset : any[] = [
    {id: 1, name: "John", age: 30},
    {id: 2, name: "Jane", age: 25},
    {id: 3, name: "Doe", age: 35}
  ];
}
