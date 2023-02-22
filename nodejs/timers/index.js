// const startTime = Date.now();
console.time('setTimeout');
const timeoutId = setTimeout(
  () => {
    console.log('Hello, world!');
    console.timeEnd('setTimeout');
    // const timeDelta = Date.now() - startTime;
    // console.log(timeDelta / 1000);
  },
  5000,
  // 'Hello, World!'
);
// clearTimeout(timeoutId);

const intervalId = setInterval(
  console.log,
  1000,
  'Hello, Interval!'
);
clearInterval(intervalId);

const immediateId = setImmediate(
  console.log,
  'Hello, Immediate!'
);
clearImmediate(immediateId);
