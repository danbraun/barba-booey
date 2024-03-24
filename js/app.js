import barba from '@barba/core'
import barbaCss from '@barba/css'

console.info('🚀App:init')

barba.use(barbaCss)

barba.init({
  debug: false,
  transitions: [
    {
      name: "with-cover",
      leave() { },
      enter() { }
    }
  ]
})
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
barba.hooks.enter((data) => {
  window.scroll({
    top: 0, 
    left: 0
  });
});