import Person from './Person';
import Transaction from './Transaction';
import Mocker from './Mocker';

const group = new Mocker({
  transactionAmount: 1
});

// group.listPeople();
// group.listTransactions();
console.log(group.transactions)
