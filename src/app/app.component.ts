import { Component, AfterViewInit } from '@angular/core';

export class Owl {
  name: string;
  mood: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  owl: Owl = {
    name: "Bill",
    mood: "happy"
  };
}
