import { Component, Input, OnInit,
          trigger,
          state,
          style,
          transition,
          animate} from '@angular/core';

export class Leaf {
  x: number;
  y: number;
}

@Component({
  selector: 'leaf',
  template: `
    <img class="leaves"
      [style.border]="'1px solid red'"
      [style.top]="top"
      [style.left]="left"
      src="../assets/leaf.png"/>
    `,
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
  left: string;
  top: string;
  ngOnInit () {
    // spawn the leaf at the correct x, y position
    this.left = Math.round(this.x) + " px";
    this.top = Math.round(this.y) + " px";
    //console.log(this.x);
    //console.log(this.y);
    console.log(this.left);
    console.log(this.top);
  }
}
