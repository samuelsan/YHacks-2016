import { Component, Input, OnInit,
          trigger,
          state,
          style,
          transition,
          animate} from '@angular/core';

export class Leaf {
  x: number;
  y: number;
  rotation: number;
}

@Component({
  selector: 'leaf',
  template: `
    <img class="leaves"
      [style.top]="top"
      [style.left]="left"
      [style.transform]="rotationStyle"
      [style.z-index]="zInStyle"
      src="../assets/leaf.png"/>
    `,
  styles: [`
    .leaves{
      position: absolute;
      height: 100px;
      opacity: 0.5;
    }
  `],
  animations: [
    trigger('isFalling', [
      state('fallen', style({
        border: '1px solid red' // placeholders for unimportant code
      })),
      state('onTree',   style({
        border: 'none'
      })),
      transition('onTree => fallen', animate('100ms ease-in'))
    ])
  ]
})

export class LeafComponent {
  @Input() x: number;
  @Input() y: number;
  @Input() rotation: number;
  @Input() zIn: number;
  left: string;
  top: string;
  rotationStyle: string;
  zInStyle: string;
  ngOnInit () {
    // spawn the leaf at the correct x, y position
    this.left = Math.round(this.x) + "px";
    this.top = Math.round(this.y) + "px";
    this.rotationStyle = "rotate(" + Math.round(this.rotation) + "deg)";
    this.zInStyle = this.zIn + "";
  }
}
