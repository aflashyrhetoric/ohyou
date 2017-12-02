import Person from './Person'

export default class Mocker {
  constructor() {
    this.people = this.data();
  }
  data() {
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

}