import { Component, Input } from '@angular/core'

@Component ({
  selector: 'app-root',
  template: `
    <h1>Orwell\'s World</h1>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})

export class AppComponent {
  // @Input() transactions: Transaction;
}
