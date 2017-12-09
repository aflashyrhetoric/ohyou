import { randomNumber } from './Utils';

export default class Person {
  constructor(name) {
    this.id = randomNumber(2000),
    this.name = name
  }
}