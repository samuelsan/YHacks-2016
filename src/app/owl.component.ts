import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'owl-img',
  template: `
    <img id="owl-{{type}}" src="../assets/{{mood}}-owl.png" />
  `,
  styles: [`
    #owl-avatar {
      height: 50px;
      position: absolute;
      top: 282px;
      left: 607px;
    }
    #owl-talking {
      height: 250px;
      position: relative;
      top: 15px;
      left: 0px;
      right: 0px;
    }
  `]
})

export class OwlComponent {
  @Input() mood: string;
  @Input() type: string;
}
