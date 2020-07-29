// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>
import Typed from 'typed.js';

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "typed" ]

  connect() {
    this.initTyped()
    this.initArrow()
  }
  initTyped() { console.log(this.typedTarget.dataset);
    const typed = new Typed('#main-typed', {
  strings: this.typedTarget.dataset.translation.split(","),
  typeSpeed: 50,
  smartBackspace: true,
  startDelay: 1500,
  backDelay: 100,
  backSpeed: 50,
  loop: true
});

  }

  initArrow() {

  $("#home-arrow").click(function() {
      $('body').animate({
          scrollTop: $("#projects").offset().top},
          'smooth');
  });
  }
}



