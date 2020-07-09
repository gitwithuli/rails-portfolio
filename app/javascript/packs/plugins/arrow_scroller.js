

const arrow_scroller = () => {
  $("#home-arrow").click(function() {
      $('body').animate({
          scrollTop: $("#projects").offset().top},
          'smooth');
  });
}

export { arrow_scroller };
