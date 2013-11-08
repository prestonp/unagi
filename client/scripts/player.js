/**
 * Player module
 *
 * @property sprite {Kinetic.sprite}
 * @property facing {enum.DIRECTION}
 */
define([
  './enums'
],
function(Enums) {

  // Default properties
  var height = width = 16;

  // Utility functions
  var createSprite = function() {
    var img = new Image();
    img.src = '../img/tiles.png';
    var sprite = new Kinetic.Sprite({
        x: 0,
        y: 0,
        image: img,
        animation: 'down',
        animations: animations,
        frameRate: 7,
        index: 0,
        scaleX: 3,
        scaleY: 3
    });
    return sprite;
  };

  var animations = {
    'down': [
      {
        x: 0*16
      , y: 9*16
      , height: height
      , width: width
      },

      {
        x: 1*16
      , y: 9*16
      , height: height
      , width: width
      }
    ]
  };

  // Export module
  return function(options) {

    // Default properties
    options = options || {};

    this.sprite = options.sprite || createSprite();
    this.facing = options.facing || Enums.Direction.DOWN;
  };

});