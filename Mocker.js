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

    people = people.map( (name) => {
      console.log(new Person(name));
      return new Person(name) 
    })
    // console.log(people);
  }

  listPeople() {
    console.log(this.people)
  }

}