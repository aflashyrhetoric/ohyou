import Person from './Person';
import Transaction from './Transaction';
import Mocker from './Mocker';

const group = new Mocker({
  transactionAmount: 1
});

// group.listPeople();
// group.listTransactions();
// console.log(group.transactions)

// Add property "addTransaction" to Group
group.addTransaction = function(transaction) {
  this.transactions.push(transaction);
}

group.calculateDebts = function() {

}