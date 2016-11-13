import { Injectable } from '@angular/core';

import { Transaction } from './transaction';
import { TRANSACTIONS } from './mock-transactions';

@Injectable()
export class TransactionService {
  getTransactions(): Promise<Transaction[]>{
    return Promise.resolve(TRANSACTIONS);
  }
}
