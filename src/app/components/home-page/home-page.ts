import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  
constructor(private dataService : DataService) {
  

}
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
    });
  }

 


}