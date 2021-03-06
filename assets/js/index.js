$(document).ready(function(){
  $('.background')
    .css('background-image','url(assets/images/bg.jpg)')
    .waitForImages(function() {
      $('body').addClass('loaded');
  }, $.noop, true);
  $(".typed").typed({
    strings: ["Great Web Applications", "Cool Websites", "Fun Projects", "Awesome People"],
    typeSpeed: 100,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  });
  var background = $('.content');
  $("#home").attrchange({
      trackValues: true, // set to true so that the event object is updated with old & new values
      callback: function(evnt) {
        if(evnt.attributeName == "style") { // which attribute you want to watch for changes
          if(evnt.newValue.search(/flex/i) > 0) {
            background.addClass('home');
            background.removeClass('staff');
            background.removeClass('blog');
            background.removeClass('projects');
          }
        }
      }
  });
  $("#staff").attrchange({
    trackValues: true, // set to true so that the event object is updated with old & new values
    callback: function(evnt) {
      if(evnt.attributeName == "style") { // which attribute you want to watch for changes
        if(evnt.newValue.search(/flex/i) > 0) {
          background.removeClass('home');
          background.addClass('staff');
          background.removeClass('blog');
          background.removeClass('projects');
        }
      }
    }
  });
  $("#blog").attrchange({
    trackValues: true, // set to true so that the event object is updated with old & new values
    callback: function(evnt) {
      if(evnt.attributeName == "style") { // which attribute you want to watch for changes
        if(evnt.newValue.search(/flex/i) > 0) {
          background.removeClass('home');
          background.removeClass('staff');
          background.addClass('blog');
          background.removeClass('projects');
        }
      }
    }
  });
  $("#projects").attrchange({
    trackValues: true, // set to true so that the event object is updated with old & new values
    callback: function(evnt) {
      if(evnt.attributeName == "style") { // which attribute you want to watch for changes
        if(evnt.newValue.search(/flex/i) > 0) {
          background.removeClass('home');
          background.removeClass('staff');
          background.removeClass('blog');
          background.addClass('projects');
        }
      }
    }
  });
  // $(".slick-slider").slick({
  //   arrows: false,
  //   infinite: false,
  //   slide: '.item',
  //   slidesToShow: 1,
  // });
});
