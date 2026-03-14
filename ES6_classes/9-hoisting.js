export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const listOfHolbertonClasses = [
  new HolbertonClass(2020, 'San Francisco'),
  new HolbertonClass(2019, 'San Francisco'),
];

export const listOfStudents = [
  new StudentHolberton('Guillaume', 'Salva', listOfHolbertonClasses[0]),
  new StudentHolberton('John', 'Doe', listOfHolbertonClasses[0]),
  new StudentHolberton('Albert', 'Clinton', listOfHolbertonClasses[1]),
  new StudentHolberton('Donald', 'Bush', listOfHolbertonClasses[1]),
  new StudentHolberton('Jason', 'Sandler', listOfHolbertonClasses[1]),
];

export default listOfStudents;
