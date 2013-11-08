/**
 * Handle user input and maintain state of
 * pressed keys
 *
 * Example:
 *
 * ```
 * var controls = new Controls();
 * while(1) {
 *  controls.listen();
 *  if (controls.pressed.left) doSomething();
 * }
 * ```
 */
define(function() {

  // Export module
  return function() {
    this.pressed = {
      left:   false
    , up:     false
    , right:  false
    , down:   false
    };

    this.listen = function() {
      // Actually listen to stuff
    };
  };
});