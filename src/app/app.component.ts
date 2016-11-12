import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  owlMood: string;
  constructor() {
    this.owlMood = "happy";
  }
  setOwlMood(owlMood: string): void {
    this.owlMood = owlMood;
  }
}
