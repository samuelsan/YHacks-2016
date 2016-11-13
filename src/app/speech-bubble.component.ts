import { Component, Input } from '@angular/core'

@Component ({
  selector: 'speech-bubble',
  template: `
    <div class="bubble">
      <owl-img [mood]="owlMood"></owl-img>
      <h4 class="dialogue"></h4>
    </div>
  `,
  styles: [`
    .bubble {
      position: fixed;
      bottom: 280px;
      right: 80px;
      z-index: 1000;
    }
    .dialogue {
      text-align: center;
      max-width: 330px;
      padding: 20px;
      z-index: 1000;
    }
  `]
})

export class SpeechBubbleComponent {
  @Input() owlMood: string;
}
