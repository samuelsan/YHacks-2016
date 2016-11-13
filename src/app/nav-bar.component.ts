import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <div id="bar">
      <div id="nav-bar">
        <icon [imageName]="'tree-icon'" [link]="'root'"></icon>
        <icon [imageName]="'transaction-icon'" [link]="'transactions'"></icon>
      </div>
      <speech-bubble></speech-bubble>
    </div>
  `,
  styles: [`
    #bar {
      display: flex;
      height: 100%;
      position: fixed;
      background-color: #546474;
    }
    #nav-bar {
      margin: 50px 0px;
      width: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `]
})

export class NavBarComponent {
  @Input() section: string;
}
