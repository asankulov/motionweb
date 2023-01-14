function points(games) {
  const totalPoints = games.reduce((prevVal, currVal) => {
    const scores = currVal.split(':'); // [3, 1]

    const x = scores[0]; // 3
    const y = scores[1]; // 1

    if (x > y) {
      return prevVal + 3;
    }

    if (x < y) {
      return prevVal;
    }

    return prevVal + 1;
  }, 0);

  return totalPoints;
}
