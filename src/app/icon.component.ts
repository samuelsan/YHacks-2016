import { Component, Input } from '@angular/core'

@Component ({
  selector: 'icon',
  template: `
    <a href="home#{{link}}">
      <div id="{{imageName}}" class="icon">
        <img class="icon-image" src="../assets/{{imageName}}.png" />
      </div>
    </a>
  `,
  styles: [`
    .icon {
      cursor: pointer;
      padding: 20px;
    }
    .icon-image {
      width: 100px;
    }
  `]
})

export class IconComponent {
  @Input() imageName: string;
  @Input() link: string;
}
