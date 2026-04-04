import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Headercomponent } from "./components/headercomponent/headercomponent";
import { DataBindingTypes } from './components/data-binding-types/data-binding-types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headercomponent, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Frontend_UI');
}
