function funcWithPromise(arg) {
  return new Promise((resolve, reject) => {
    if (arg) {
      setTimeout(() => {
        resolve('resolved value');
      }, 5000);
    } else {
      reject('rejected');
    }
  });
}

// funcWithPromise(true)
//   .then((value) => {
//     console.log('resolve');
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log('reject');
//     console.log(error);
//   });


funcWithPromise(false)
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    console.log('resolved 2');
  })
  .catch((error) => {
    console.log('reject');
    console.log(error);
  })
  .finally(() => {
    console.log('finally code');
  })

console.log('code after setTimeout');


// function syncFunc(arg) {
//   if (arg) {
//     return 'true sync value';
//   }
//
//   return 'false sync value';
// }
//
// const syncFuncValue = syncFunc(true);
//
// console.log(syncFuncValue);
//
//
// const asyncFuncValue = funcWithPromise(true);
//
// console.log(asyncFuncValue);



