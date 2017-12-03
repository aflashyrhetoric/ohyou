import Person from './Person';
import Transaction from './Transaction';

export default class Group {
  // Accepts array of people
  constructor(people) {
    this.people = people;
  }
}