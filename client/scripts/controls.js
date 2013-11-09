/**
 * Handle user input and maintain state of
 * pressed keys
 *
 * Example:
 *
 * ```
 * var controls = new Controls();
 * controls.listen();
 * while(1)
 *  if (controls.pressed.left) doSomething();
 * ```
 */
define(function() {

  var toggleKeyPressed = function(val, event) {
    switch (event.keyCode) {
      case 87:
        this.pressed.up = val;
        break;
      case 83:
        this.pressed.down = val;
        break;
      case 65:
        this.pressed.left = val;
        break;
      case 68:
        this.pressed.right = val;
        break;
      default:
        break;
    };

    this.pressed.active = this.pressed.up   ||
                          this.pressed.down ||
                          this.pressed.left ||
                          this.pressed.right;
  }

  // Export module
  return function() {
    this.pressed = {
      left:   false
    , up:     false
    , right:  false
    , down:   false
    , active: false
    };

    this.listen = function() {
      var _this = this;
      document.addEventListener('keydown', toggleKeyPressed.bind(this, true));
      document.addEventListener('keyup', toggleKeyPressed.bind(this, false));
    };
  };
});