// Transaction
export default class Transaction {
  constructor(amount, purchaser, beneficiaries) {
    this.amount = amount;
    this.purchaser = purchaser;
    this.beneficiaries = beneficiaries;
  }
}
