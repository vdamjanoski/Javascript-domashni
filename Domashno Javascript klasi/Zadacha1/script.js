class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayPerson() {
      console.log(`Name = ${this.name}`);
      console.log(`Age = ${this.age}`);
      console.log(`Country = ${this.country}`);
    }
  }
  
  const person1 = new Person('Vladimir', 23, 'Macedonia');
  const person2 = new Person('Filip', 24, 'Macedonia');
  
  person1.displayPerson();
  
  person2.displayPerson();