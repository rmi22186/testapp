//let parallax work
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });
})(jQuery);


//allow scroll transitions when clicking nav bars links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          //scrollTop final number is number of pixels 
          scrollTop: target.offset().top-50
        }, 500);
        return false;
      }
    }
  });
});

var lightGalleryOptions = {
  mode      : 'slide',  // Type of transition between images. Either 'slide' or 'fade'.
  useCSS    : true,     // Whether to always use jQuery animation for transitions or as a fallback.
  cssEasing : 'ease',   // Value for CSS "transition-timing-function".
  easing    : 'linear', //'for jquery animation',//
  speed     : 250,      // Transition duration (in ms).
  
  preload         : 2,
  showAfterLoad   : true,  // Show Content once it is fully loaded.
  selector        : null,  // Custom selector property insted of just child.

  showThumbByDefault   : true,    // Whether to display thumbnails by default..
  exThumbImage         : false,    // Name of a "data-" attribute containing the paths to thumbnails.
  animateThumb         : true,     // Enable thumbnail animation.
  currentPagerPosition : 'middle', // Position of selected thumbnail.
  thumbWidth           : 100,      // Width of each thumbnails
  thumbMargin          : 10,        // Spacing between each thumbnails 

  controls         : true,  // Whether to display prev/next buttons.
  hideControlOnEnd : false, // If true, prev/next button will be hidden on first/last image.
  loop             : false, // Allows to go to the other end of the gallery at first/last img.
  escKey           : true,  // Whether lightGallery should be closed when user presses "Esc".
  closable         : true,  //allows clicks on dimmer to close gallery
  counter      : true, // Shows total number of images and index number of current image.
  lang         : { allPhotos: 'All photos' }, // Text of labels.

  mobileSrc         : false, // If "data-responsive-src" attr. should be used for mobiles.
  mobileSrcMaxWidth : 640,   // Max screen resolution for alternative images to be loaded for.
  swipeThreshold    : 50,    // How far user must swipe for the next/prev image (in px).
  enableTouch       : true,  // Enables touch support
  enableDrag        : true,  // Enables desktop mouse drag support
};


$("#lightGallery").lightGallery(lightGalleryOptions);

$('.sideclick').on('click', function() {
    $('.button-collapse').sideNav('hide');
});

$('#map-container').on('click', function() {
    $('#map').removeClass('scrolloff');
  });
  //when leaving the map container, shuts off navigation of map again
  $('#map-container').mouseleave(function() {
    $('#map').addClass('scrolloff');
  });


$('#do-nothing').on('click', function(event) {
  event.preventDefault();
});

  var styles = [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

// map.setOptions({styles: styles});