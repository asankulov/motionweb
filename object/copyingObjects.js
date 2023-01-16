const cat1 = {
  name: 'Tom',
  color: 'grey',
  voice () {
    console.log('Myau');
  },
  age: 2,
  parents: {
    mother: 'egyptian',
    father: 'usual',
  },
};

const cat2 = cat1;
console.log(cat2 === cat1);
// console.log(cat1);
// console.log(cat2);
//
// cat2.name = 'Jerry';
// cat2.color = 'black';
// cat2.age = 3.5;
//
// console.log(cat2);
// console.log(cat1);

const cat3 = Object.assign({}, cat1);

// console.log(cat3);
cat3.name = 'Murka';
cat3.color = 'white';
cat3.age = 1;
// console.log(cat3);
// console.log(cat1);
cat3.voice();
cat1.voice();
cat3.parents.mother = 'siberian';
cat3.parents.father = 'karakal';

console.log('cat3: ', cat3);
console.log('cat1: ', cat1);
console.log(cat3 === cat1);
console.log(cat3.parents === cat1.parents);
