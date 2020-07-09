

const arrow_scroller = () => {
  $("#home-arrow").click(function() {
      $('html,body').animate({
          scrollTop: $("#projects").offset().top},
          'slow');
  });
}

export { arrow_scroller };
