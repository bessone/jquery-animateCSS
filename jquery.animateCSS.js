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
    animateCSS: function(animation, options) {
      options = $.extend(true, {
        animation: animation,
        complete: function() {},
        delay: 0,
        duration: 1000
      }, options);

      $(this).each(function() {
        var el = this;

        // Apply duration
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
            .on('animationend mozAnimationEnd MSAnimationEnd oanimationend webkitAnimationEnd', function() {
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
