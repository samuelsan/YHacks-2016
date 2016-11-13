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
      bottom: 300px;
      right: 120px;
    }
    .dialogue {
      text-align: center;
      max-width: 330px;
      padding: 20px;
    }
  `]
})

export class SpeechBubbleComponent {
  @Input() owlMood: string;
}
