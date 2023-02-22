function Person(name, age, hasDegree) {
  this.name = name;
  this.age = age;
  this.hasDegree = hasDegree;
  this.run = function () {
    console.log('run');
  }
}

const umut = new Person('Umut', 20, true);
console.log(umut.age);
umut.run();

const alikhan = new Person('Alikhan', 21, true);
console.log(alikhan.age);
alikhan.run = function () {
  console.log('Run Alikhan, run!');
}
alikhan.run();
