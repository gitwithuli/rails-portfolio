import Typed from 'typed.js';

const typed = new Typed('#main-typed', {
  strings: [
          'I am a full stack developer.',
          'I am a programmer.',
          'I love solving problems.',
          'I love technology!',
          ],
  typeSpeed: 40,
  smartBackspace: true,
  startDelay: 1500,
  backDelay: 200,
  backSpeed: 40,
  loop: true
});

export { typed };
