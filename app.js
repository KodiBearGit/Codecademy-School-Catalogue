class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(number) {
    if (typeof(number) === 'number') {
     this._numberOfStudents = number;
    } else {
    console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let ranNum = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[ranNum];
  }
}

class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents);
  }
}

class High extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents);
    this._sportsTeams = [];
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(lorraineHansbury);
//call method quickFacts
lorraineHansbury.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

