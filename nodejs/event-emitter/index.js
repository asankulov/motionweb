const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('send message', (data) => {
  console.log('Participant 1');
  console.log('New message from Node.js ' + data.sender);
  console.log('Message: ', data.message + '\n');
});

eventEmitter.on('send message', (data) => {
  console.log('Participant 2');
  console.log('New message from Node.js ' + data.sender);
  console.log('Message: ', data.message + '\n');
});

eventEmitter.once('send message', (data) => {
  console.log('once emitted', data);
});


eventEmitter.emit(
  'send message',
  {
    message: 'Hello!',
    sender: 'Alikhan',
  },
);

eventEmitter.emit(
  'send message',
  {
    message: 'How are you?',
    sender: 'Nurzada',
  }
);
