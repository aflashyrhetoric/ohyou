// This class mocks data returned from a database
import Person from './Person'
import Transaction from './Transaction'
import { capitalize, randomNumber, randomTotal, randomValueFromArray } from './Utils'
import {people} from '../Database.js'

export default class Mocker {
  constructor(config) {
    this.people = this.mockPeople();
    this.transactions = 
      config.transactionAmount 
      ? this.mockTransactions(config.transactionAmount) 
      : 5;
  }

  // Returns people array
  mockPeople() {
   return people.map( (name) => {
      return new Person(name) 
    })
  }

  listPeople() {
    console.log(`This group consists of:`)
    this.people.forEach((person, index) => {
      console.log(capitalize(person.name));
    })
  }

  mockTransactions(amount) {
    let mockTransactions = [];

    // Controls amount of transactions created
    for(let i=0; i < amount; i++) {

      let beneficiaries = [];

      // Add random number of random beneficiaries

      // Check to see that beneficiaries isn't empty.
      let randomPersonIndex = randomNumber(people.length);
      if(randomPersonIndex == 0) {
        randomPersonIndex = 1;
      }

      for(let j=0; j < randomPersonIndex; j++) {
        // Get a random person
        let randomPerson = randomValueFromArray(people)

        // If they exist already, exclude
        while(beneficiaries.includes(randomPerson)) {
          randomPerson = randomValueFromArray(people)
        }
        beneficiaries.push(randomPerson);
      }

      mockTransactions.push([
        randomTotal(),
        randomValueFromArray(people),
        beneficiaries
      ])
    }
    
    return mockTransactions.map( transaction => {
      return new Transaction(
        transaction[0],
        transaction[1],
        transaction[2],
      )
    })
  }

  listTransactions() {
    this.transactions.forEach((transaction, index) => {
      // console.log(transaction)
      console.log(`Transaction ${index + 1}: Purchase for ${transaction.amount} made by ${transaction.purchaser} for: ${transaction.beneficiaries}`)
    })
  }


}