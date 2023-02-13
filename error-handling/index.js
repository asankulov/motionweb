function checkCredentials(login, password) {
  if (login !== 'motionweb') {
    throw new Error('Login is incorrect!');
  }

  if (password !== '12345') {
    throw new Error('Password is incorrect!');
  }

  console.log('Credentials are correct!');
}

try {
  checkCredentials('motionweb', '12345');
  console.log('code after check credentials');
} catch (error) {
  console.log(error);
} finally {
  console.log('finally code');
}

