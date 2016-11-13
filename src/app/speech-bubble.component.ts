import { Component, Input } from '@angular/core'

@Component ({
  selector: 'speech-bubble',
  template: `
    <div class="container">
      <img id="owl-avatar" src="../assets/happy-owl.png" />
      <div class="bubble">
        <h4 class="dialogue"></h4>
      </div>
      <h4 class="statistics">Stats</h4>
      <h4>Number of leaves remaining: 238</h4>
      <h4>Budget remaining: $476.50</h4>

      <h4 class="budget-info">To meet your budget, you should spend approximately:</h4>
      <ul class="spending-list">
        <li>$158.83 per week</li>
        <li>$22.69 per day</li>
      </ul>

    </div>
  `,
  styles: [`
    .container {
      width: 420px;
      height: 100%;
      background-color: #eaeaea;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .dialogue {
      margin: 0 auto;
      text-align: center;
      max-width: 330px;
      line-height: 30px;
    }
    .bubble {
      margin: 0 auto;
      margin-top: 50px;
      width: 360px;
      height: 90px;
      border-radius: 10px;
      background-color: white;
      padding: 12px;
    }
    .statistics {
      margin-top: 50px;
      text-decoration: underline;
    }
    .budget-info {
      text-align: center;
      margin-top: 50px;
    }
    .spending-list {
      font-size: 18px;
      margin-top: 15px;
    }
    #owl-avatar {
      height: 250px;
      position: relative;
      top: 30px;
    }
  `]
})

export class SpeechBubbleComponent {
  @Input() owlMood: string;
}
