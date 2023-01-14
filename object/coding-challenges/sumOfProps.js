const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

const sum = Object.values(salaries).reduce((prevVal, currVal) => {
  return prevVal + currVal;
}, 0);

console.log(sum);
