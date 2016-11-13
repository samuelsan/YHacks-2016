import { Component, Input } from '@angular/core'

@Component ({
  selector: 'speech-bubble',
  template: `
    <div class="bubble">
      <img id="owl-avatar" src="../assets/happy-owl.png" />
      <h4 class="dialogue"></h4>
    </div>
  `,
  styles: [`
    .bubble {
      position: relative;
      left: 150px;
      width: 450px;
      height: 100%;
      background-color: #eaeaea;
    }
    .dialogue {
      text-align: center;
      margin: 0 auto;
      max-width: 400px;
      margin-top: 50px;
    }
    #owl-avatar {
      height: 250px;
      position: relative;
      top: 30px;
      margin-left: 50px;
    }
  `]
})

export class SpeechBubbleComponent {
  @Input() owlMood: string;
}
