import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'owl-img',
  template: `
    <img id="owl-avatar" src="../assets/{{mood}}-owl.png" />
  `,
  styles: [`
    #owl-avatar {
      height: 250px;
      position: relative;
      top: 30px;
    }
  `]
})

export class OwlComponent {
  @Input() mood: string;
}
