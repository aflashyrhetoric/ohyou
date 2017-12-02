import Person from './Person';
import Transaction from './Transaction';
import Mocker from './Mocker';

const group = new Mocker();

group.people.forEach(person => {
    console.log(person.name)
});

group.transactions.forEach(transaction => console.log(transaction))

