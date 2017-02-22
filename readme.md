# jquery.animateCSS.js - A micro-plugin for using Animate.css with jQuery.

Developed by Cory LaViska for A Beautiful Site, LLC

Licensed under the MIT license: http://opensource.org/licenses/MIT

## Overview:

[Animate.CSS](https://daneden.github.io/animate.css/) is amazing, but it's a bit limited out-of-the-box. This plugin makes it easier to use with jQuery.

Features:

- Apply any Animate.css effect.
- Custom durations without adding CSS.
- Optional delay before animation.
- Callback for when animations complete.
- Compact! (About 50 lines)

## Installing

Include the minified version of this plugin in your project or install via NPM:

```
npm install --save @claviska/jquery-animate-css
```

## Using the plugin

Minimal example:

```javascript
// Minimal example
$(el).animateCSS('bounce');
```

Example with all possible options:

```javascript
// Example with all options
$(el).animateCSS('fadeOut', {
  delay: 1000,
  duration: 300,
  complete: function() {
    $(this).remove();
  }
});
```

### Options

The first argument is always the animation you want to use. You can find an up-to-date list in the Animate.css [readme file](https://github.com/daneden/animate.css).

The second argument is an object containing any or all of the following properties:

- `delay`: how long to wait (in milliseconds) before applying the animation (default `0`).
- `duration`: the animation duration (default `1000`).
- `complete`: a callback to run after the animation is complete. Called in the context of the target element.
