import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  imports: [],
  templateUrl: './childcomponent.html',
  styleUrl: './childcomponent.scss',
})
export class Childcomponent {
 @Input() parentvalue = "value is waiting to be sent to parent";
@Output() pushers = new EventEmitter<string>();



submitHandler(){
	this.pushers.emit("data from child");
}
}
