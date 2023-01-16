function addLength(str) {
  const words = str.split(' '); // ['apple', 'ban'];

  return words.map((val) => {
    return val + ' ' + val.length;
  });
}

const num1 = 120.3453423436;
console.log(num1.toFixed(2));
