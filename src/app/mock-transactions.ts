import { Transaction } from './transaction';

export const TRANSACTIONS: Transaction[] = [
  {
    pending: false,
    currency: "USD",
    id: "1323463881",
    amount: -5.5,
    accountId: "10297369",
    isBankCc: "BANKCC",
    category: "Uncategorized",
    date: "20160822",
    name: "Sharetea Metreo"
  },
  {
    pending: false,
    currency: "USD",
    id: "333559097",
    amount: 10.09,
    accountId: "3018452",
    isBankCc: "BANKCC",
    category: "Income",
    date: "20161009",
    name: "Checking"
  },
  {
    pending: false,
    currency: "USD",
    id: "333558124",
    amount: 11.04,
    accountId: "3005071",
    isBankCc: "BANKCC",
    category: "Income",
    date: "20161104",
    name: "Savings"
  },
  {
    pending: true,
    currency: "USD",
    id: "333637465",
    amount: 11.08,
    accountId: "3005071",
    isBankCc: "BANKCC",
    category: "Income",
    date: "20161109",
    name: "Savings"
  },
  {
    pending: false,
    currency: "USD",
    id: "1323464140",
    amount: -3.26,
    accountId: "10297370",
    isBankCc: "BANKCC",
    category: "Fast Food",
    date: "20161001",
    name: "Chipotle"
  },
  {
    pending: false,
    currency: "USD",
    id: "1323464092",
    amount: -105.86,
    accountId: "10297370",
    isBankCc: "BANKCC",
    category: "Groceries",
    date: "20160806",
    name: "Whole Foods"
  },
  {
    pending: false,
    currency: "USD",
    id: "333559071",
    amount: -11.05,
    accountId: "3018452",
    isBankCc: "BANKCC",
    category: "Check",
    date: "20161105",
    name: "Check 310"
  }
]
