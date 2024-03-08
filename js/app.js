import barba from '@barba/core';

console.info('🚀App:init');

barba.init({
  debug: true,
  transitions: [{
    name: 'default-transition',
    leave() {
      // create your stunning leave animation here
    },
    enter() {
      // create your amazing enter animation here
    }
  }]
}); 