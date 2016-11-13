import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'owl-img',
  template: `
    <img id="owl-avatar" src="../assets/{{mood}}-owl.png" />
  `,
  styles: [`
    #owl-avatar {
      height: 250px;
      position: fixed;
      right: 15px;
      bottom: 15px;
      z-index: 1000;
    }
  `]
})

export class OwlComponent {
  @Input() mood: string;
}
