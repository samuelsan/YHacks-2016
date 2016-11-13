import { Component, Input } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { ReversePipe } from './reverse.pipe';

@Component ({
  selector: 'transaction-details',
  template: `
    <div class="details-box table">
      <h2>Transactions</h2>
      <tr>
        <th>Name </th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>        
      <tr *ngFor="let transaction of transactions | async; let i = index">
        <template [ngIf]="i>401">
          {{ transaction.name }}
          {{ transaction.category }}
          {{ transaction.amount }}
          {{ transaction.date }}
        </template>
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
  transactions: FirebaseListObservable<any[]>;
  // transaction1: FirebaseObjectObservable<any>;
  // transaction2: FirebaseObjectObservable<any>;
  // transaction3: FirebaseObjectObservable<any>;
  // transaction4: FirebaseObjectObservable<any>;
  budget: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.budget = af.database.list('/budget', {preserveSnapshot: true});

    // this.transaction = af.database.object('/transactions/2');
    // this.transaction1 = af.database.object('/transactions/3');
    // this.transaction2 = af.database.object('/transactions/4');
    // this.transaction3 = af.database.object('/transactions/0');
    // this.transaction4 = af.database.object('/transactions/1');
    this.transactions = af.database.list('/transactions', {
      query: {
        orderByChild: 'date',
      }
    });
  // @Input() transactions: Transaction;
  }
}
