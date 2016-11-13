import { Component, Input } from '@angular/core'

@Component ({
  selector: 'transaction-details',
  template: `
    <div class="details-box table">
      <h2>Transactions</h2>
      <tr>
        <th>Name</th>
        <th>Account ID</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </div>
  `,
  styles: [`
    .details-box {
      position: absolute;
      top: 430px;
      left: 50px;
      width: 450px;
      height: 370px;
      border: 1px solid gray;
      padding: 20px;
    }
  `]
})

export class TransactionDetailsComponent {
  // @Input() transactions: Transaction;
}
