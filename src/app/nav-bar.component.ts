import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <div id="nav-bar">
      <speech-bubble></speech-bubble>
    </div>
  `,
  styles: [`
    #nav-bar {
      height: 100%;
      position: fixed;
      width: 600px;
      background-color: #546474;
    }
  `]
})

export class NavBarComponent {
  @Input() section: string;
}
