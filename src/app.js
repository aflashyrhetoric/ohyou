import Person from './Person';
import Transaction from './Transaction';
import Mocker from './Mocker';

const group = new Mocker({
  transactionAmount: 10
});

group.listPeople();
group.listTransactions();

