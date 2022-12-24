// const func = function () {
//
// };
//
// const sum = (a, b) => {
//   return a + b;
// }
//
// console.log(sum(4, 6));
// function funcWithCallback(a, b, cb) {
//   const result = cb(a, b);
//   console.log(result);
//
//   return result;
// }
//
// const callbackFunc = (a, b) => a * b;
//
// console.log(funcWithCallback(3, 6, callbackFunc));

function checkCredentials(
  login,
  password,
  checkLoginCb,
  checkPasswordCb,
) {
  if (!checkLoginCb(login)) {
    console.log('Login is incorrect!');

    return;
  }

  if (!checkPasswordCb(password)) {
    console.log('Password is incorrect!');

    return;
  }

  console.log('Login and password are correct!');
}

const checkLoginCb = (login) => {
  return login === 'motionweb';
}

const checkPasswordCb = (password) => password === '1234';

checkCredentials(
  'motion',
  '1234',
  checkLoginCb,
  checkPasswordCb,
);

console.log('----------------------------------');

checkCredentials(
  'motionweb',
  '0000',
  checkLoginCb,
  checkPasswordCb,
)

console.log('----------------------------------');

checkCredentials(
  'motionweb',
  '1234',
  checkLoginCb,
  checkPasswordCb,
)

const checkCredentialsV2 = (
  login,
  password,
  checkLoginCb,
  checkPasswordCb,
) => {
  console.log('V2:');

  if (checkLoginCb(login) && checkPasswordCb(password)) {
    console.log('Login and password are correct!');

    return;
  }

  console.log('Login or password are incorrect!');
}

console.log('----------------------------------');


checkCredentialsV2(
  'motion',
  '1234',
  checkLoginCb,
  checkPasswordCb,
);

console.log('----------------------------------');

checkCredentialsV2(
  'motionweb',
  '1233',
  checkLoginCb,
  checkPasswordCb,
);

console.log('----------------------------------');

checkCredentialsV2(
  'motionweb',
  '1234',
  checkLoginCb,
  checkPasswordCb,
);


const checkCredentialsV3 = (
  login,
  password,
  checkLoginCb,
  checkPasswordCb,
) => {
  console.log('V3:');

  if (!checkLoginCb(login) || !checkPasswordCb(password)) {
    console.log('Login or password are incorrect!');

    return;
  }

  console.log('Login and password are correct!');
}

const classicFunc = function () {

}

const arrowFunc = () => {

}
