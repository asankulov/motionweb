
console.log(multiply(3, 5));
function multiply(c, d) {
  return c * d;
}

function sum2(a, b, c, callback) {
  const d = a + b;
  // const result = callback(c, d);

  return callback(c, d);
}

console.log(sum2(10, 2, 3, multiply));
console.log(func1(1, 2, multiply));
const func1 = function (a, b, callback) {
  callback(a + b);
}

const callbackFunction = function (param) {
  console.log(param);
};

func1(10, 2, callbackFunction);
