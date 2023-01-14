function isEmpty(obj) {
  const keys = Object.keys(obj);

  return keys.length === 0;
}

const obj1 = { property: 1 };
console.log(isEmpty(obj1));
const obj2 = {};
console.log(isEmpty(obj2));

function isEmptyV2(obj) {
  const values = Object.values(obj);

  return values.length === 0;
}

console.log(isEmptyV2(obj1));
console.log(isEmptyV2(obj2));
