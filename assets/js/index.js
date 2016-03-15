$(document).ready(function(){
  $('.background')
    .css('background-image','url(assets/images/bg.jpg)')
    .waitForImages(function() {
      $('body').addClass('loaded');
  }, $.noop, true);
  $(".typed").typed({
    strings: ["We Make Web Applications", "Cool Websites for Cool People", "Fun Projects!", "and A Few Other Things Sometimes"],
    typeSpeed: 100,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 1500,
  });
  var background = $('.content');
  $("#home").attrchange({
      trackValues: true, // set to true so that the event object is updated with old & new values
      callback: function(evnt) {
        if(evnt.attributeName == "style") { // which attribute you want to watch for changes
          if(evnt.newValue.search(/flex/i) == 9) {
            console.log("changed");
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
        if(evnt.newValue.search(/flex/i) == 9) {
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
        if(evnt.newValue.search(/flex/i) == 9) {
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
        if(evnt.newValue.search(/flex/i) == 9) {
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
