(async () => {
  async function asyncFunc() {
    return 'value';
  }

  // asyncFunc().then((value) => {
  //   console.log(value);
  // });

  const result = await asyncFunc();

  console.log(result)
})();
