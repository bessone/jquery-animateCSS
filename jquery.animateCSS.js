//
// jquery.animateCSS.js - A micro-plugin for using Animate.css with jQuery.
//
// Developed by Cory LaViska for A Beautiful Site, LLC
//
// Licensed under the MIT license: http://opensource.org/licenses/MIT
//
if(jQuery) (function($) {
  'use strict';

  $.extend($.fn, {
    animateCSS: function(animation) {
      var options = {};

      // Detect signature
      if(typeof arguments[1] === 'object') {
        // $(el).animateCSS('animation', options)
        options = arguments[1];
      } else if(typeof arguments[1] === 'function') {
        // $(el).animateCSS('animation', complete)
        options.complete = arguments[1];
      } else if(typeof arguments[1] === 'number') {
        // $(el).animateCSS('animation', duration, [complete])
        options.duration = arguments[1];
        if(typeof arguments[2] === 'function') options.complete = arguments[2];
      }

      // Merge options with defaults
      options = $.extend(true, {
        animation: animation,
        complete: function() {},
        delay: 0,
        duration: 1000
      }, options);

      // Apply animation to each element
      $(this).each(function() {
        var el = this;

        // Set duration
        if(options.duration) {
          $(el).css({
            '-moz-animation-duration': options.duration + 'ms',
            '-o-animation-duration': options.duration + 'ms',
            '-webkit-animation-duration': options.duration + 'ms',
            'animation-duration': options.duration + 'ms'
          });
        }

        // Animate it
        setTimeout(function() {
          $(el)
            .addClass('animated ' + options.animation)
            .one('animationend mozAnimationEnd MSAnimationEnd oanimationend webkitAnimationEnd', function() {
              // Remove classes when animation ends
              $(el).removeClass('animated ' + options.animation);

              // Run complete callback
              options.complete.call(el);
            });
        }, options.delay);
      });

      return this;
    }
  });

})(jQuery);
