const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

// eventEmitter.on('send message', (data) => {
//   console.log('Participant 1');
//   console.log('New message from Node.js ' + data.sender);
//   console.log('Message: ', data.message + '\n');
// });
//
// eventEmitter.on('send message', (data) => {
//   console.log('Participant 2');
//   console.log('New message from Node.js ' + data.sender);
//   console.log('Message: ', data.message + '\n');
// });
//
// eventEmitter.once('send message', (data) => {
//   console.log('once emitted', data);
// });
//
//
// eventEmitter.emit(
//   'send message',
//   {
//     message: 'Hello!',
//     sender: 'Alikhan',
//   },
// );

eventEmitter.emit(
  'send message',
  {
    message: 'How are you?',
    sender: 'Nurzada',
  }
);

const listener1 = (data) => {
  console.log('listener1: ', data);
}
const listener2 = (data) => {
  console.log('listener2: ', data);
}

const listener3 = (data) => {
  console.log('listener3: ', data);
}

eventEmitter.addListener('send message', listener1);
eventEmitter.prependListener('send message', listener2);
eventEmitter.prependListener('send message', listener3);

eventEmitter.emit('send message', 'test');

// eventEmitter.off('send message', listener);

// eventEmitter.removeListener('send message', listener1);

// eventEmitter.emit('send message', 'test1');


console.log(eventEmitter.eventNames());
console.log(eventEmitter.listenerCount('send message'));
