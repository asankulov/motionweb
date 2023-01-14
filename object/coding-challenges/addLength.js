function addLength(str) {
  const words = str.split(' '); // ['apple', 'ban'];

  return words.map((val) => {
    return val + ' ' + val.length;
  });
}
