import Person from './Person';
import Transaction from './Transaction';
import Mocker from './Mocker';

const group = new Mocker({
  transactionAmount: 4
});

// group.listPeople();
// group.listTransactionsRaw();
// console.log(group.transactions)

// Add property "addTransaction" to Group
group.addTransaction = function(transaction) {
  this.transactions.push(transaction);
}

group.calculateDebts = function() {
  this.people.forEach( (person) => {
    console.log(person);
  });
}

group.calculateDebts();