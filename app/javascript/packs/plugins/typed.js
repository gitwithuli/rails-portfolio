import Typed from 'typed.js';

const typed = new Typed('#main-typed', {
  strings: [
          'I am a full stack developer.',
          'I am a programmer.',
          'I love solving problems.',
          'I love technology!',
          ],
  typeSpeed: 50,
  smartBackspace: true,
  startDelay: 1500,
  backDelay: 100,
  backSpeed: 50,
  loop: true
});

export { typed };
