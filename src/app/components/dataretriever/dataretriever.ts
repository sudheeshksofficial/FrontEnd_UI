import { Component } from '@angular/core';
import { DataService } from '../../services/data-service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dataretriever',
  imports: [ReactiveFormsModule],
  templateUrl: './dataretriever.html',
  styleUrl: './dataretriever.scss',
})
export class Dataretriever {

  receivedData : any[] = [];
  formdata : FormGroup;

  constructor(private retrieveer : DataService,private fb : FormBuilder) {
    this.receivedData = this.retrieveer.dataset;
    this.formdata = this.fb.group({
    id : new FormControl(''),
    name : new FormControl(''),
    age : new FormControl('')
   });
   }

   formdataReceiver(){
    this.receivedData.push(this.formdata.value);
    
    console.log(this.formdata.value);
   }

   

     

}
