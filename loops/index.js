const bochka = [];

for (let i = 9; i > 0; i--) {
  console.log(i);
  bochka.push(i);
}

console.log(bochka);

let i = 1;
i++; // i = i + 1;

i--; // i = i - 1;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    continue;
  }
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  } else {
    oddNumbers.push(numbers[i]);
  }
}

console.log('evenNumbers: ', evenNumbers);
console.log('oddNumbers: ', oddNumbers);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // sum = sum + numbers[i]
}

console.log(sum);

let sum2 = 0;
while (numbers.length > 0) {
  sum2 += numbers.pop();
}

console.log(sum2);

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
  if (j === 5) {
    break;
  }
}

const a = -4;
const b = 2;

const reversedA = a * (-1);
const reversedB = b * (-1);
console.log(reversedA);
console.log(reversedB);

