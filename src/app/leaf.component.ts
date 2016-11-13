import { Component, Input, OnInit, OnChanges,
          trigger,
          state,
          style,
          transition,
          animate} from '@angular/core';

export class Leaf {
  x: number;
  y: number;
  rotation: number;
  zIn: number;
  status: boolean = false;
}

@Component({
  selector: 'leaf',
  template: `
    <img class="leaves"
      [style.top]="top"
      [style.left]="left"
      [style.z-index]="zInStyle"
      [style.transform]="rotationStyle"
      [@isFalling]="status"
      src="../assets/leaf.png"/>
    `,
  styles: [`
    .leaves{
      position: absolute;
      height: 60px;
      opacity: 0.5;
    }
  `],
  animations: [
    trigger('isFalling', [
      state('true', style({
        transform: 'translate(150px, 800px) rotateZ(360deg)'
      })),
      state('false', style({})),
      transition('0 => 1', animate('3000ms ease-in'))
    ])
  ]
})

export class LeafComponent implements OnChanges{
  @Input() x: number;
  @Input() y: number;
  @Input() rotation: number;
  @Input() zIn: number;
  @Input() status: boolean;
  // @Input() isFalling: boolean = false;
  left: string;
  top: string;
  rotationStyle: string;
  zInStyle: string;
  ngOnInit () {
    // spawn the leaf at the correct x, y position
    this.left = Math.round(this.x) + "px";
    this.top = Math.round(this.y) + "px";
    this.rotationStyle = "rotate(" + Math.round(this.rotation) + "deg)";
    this.zInStyle = Math.round(this.zIn) + "";
  }
  ngOnChanges() {
    //this.status = !this.status;
  }
}
