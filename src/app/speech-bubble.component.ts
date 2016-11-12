import { Component, Input } from '@angular/core'

@Component ({
  selector: 'speech-bubble',
  template: `
    <div class="bubble">
      <owl-img [mood]="owlMood" [type]="'talking'"></owl-img>
      <h4 class="dialogue">Orwell: {{dialogue}}</h4>
    </div>
  `,
  styles: [`
    .bubble {
      position: absolute;
      top: 0;
      left: 0;
    }
    .dialogue {
      text-align: center;
      max-width: 330px;
      padding: 20px;
    }
  `]
})

export class SpeechBubbleComponent {
  @Input() dialogue: String;
  @Input() owlMood: string;
}
