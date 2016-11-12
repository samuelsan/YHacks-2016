import { Component, Input } from '@angular/core';
import { Owl } from './owl'

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
  `]
})

export class OwlComponent {
  name = "Bill";
  @Input() mood: string;
  @Input() type: string;
}
