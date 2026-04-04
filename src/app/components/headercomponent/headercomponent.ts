import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Childcomponent } from "../childcomponent/childcomponent";

@Component({
  selector: 'app-headercomponent',
  imports: [RouterLink, Childcomponent],
  templateUrl: './headercomponent.html',
  styleUrl: './headercomponent.scss',
})
export class Headercomponent {
senderData : string = "data from parent";
Datareceived : string = "no data received from child";
sendSecond : string = "second data from parent";

  receiver(event: string){
    this.Datareceived = event;
  }
}
