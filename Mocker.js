// This class mocks data returned from a database
import Person from './Person'
import Transaction from './Transaction'
import { randomValueFromArray } from './Utils'

export default class Mocker {
  constructor() {
    this.people = this.mockPeople();
    this.transactions = this.mockTransactions();
  }
  mockPeople() {
    let people = [
      "rebecca",
      "rachel",
      "kevin",
      "billy"
    ]

   return people.map( (name) => {
      return new Person(name) 
    })
  }

  listPeople() {
    console.log(this.people)
  }

  mockTransactions() {
    let people = [
      "rebecca",
      "rachel",
      "kevin",
      "billy"
    ]
    let mockTransactions = [];
    mockTransactions.push(
      [
        12.50,
        randomValueFromArray(people),
        [
          randomValueFromArray(people),
          randomValueFromArray(people),
          randomValueFromArray(people),
        ]
      ],
      [
        100.00,
        randomValueFromArray(people),
        [
          randomValueFromArray(people),
          randomValueFromArray(people),
        ]
      ],
      [
        20.99,
        randomValueFromArray(people),
        [
          randomValueFromArray(people),
          randomValueFromArray(people),
          randomValueFromArray(people),
          randomValueFromArray(people),
        ]
      ],
    )
    return mockTransactions.map( transaction => {
      return new Transaction(transaction)
    } )
  }

}