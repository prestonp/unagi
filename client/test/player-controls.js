define([
  '../lib/kinetic-v4.7.3.min.js'
, '../scripts/player.js'
, '../scripts/controls.js'
, '../scripts/enums.js'
],
function( Kinetic, Player, Controls, Enums ) {

  // Player
  var player = new Player();

  // Layer
  var layer = new Kinetic.Layer();
  layer.add(player.sprite);

  // Stage
  var stage = new Kinetic.Stage({
    container: 'container',
    width: 512,
    height: 512
  });
  stage.add(layer);

  // Attach key event listeners
  var controls = new Controls();
  controls.listen();

  var updatePlayer = function() {

    // aliases
    var pressed   = controls.pressed
      , sprite    = player.sprite
      , animation = sprite.getAnimation();

    if (pressed.left) {
      if (animation != Enums.Direction.LEFT)
        sprite.setAnimation(Enums.Direction.LEFT);
      sprite.setX(sprite.getX()-player.speed);
    }

    if (pressed.right) {
      if (animation != Enums.Direction.RIGHT)
        sprite.setAnimation(Enums.Direction.RIGHT);
      sprite.setX(sprite.getX()+player.speed);
    }

    if (pressed.down) {
      if (animation != Enums.Direction.DOWN)
        sprite.setAnimation(Enums.Direction.DOWN);
      sprite.setY(sprite.getY()+player.speed);
    }

    if (pressed.up) {
      if (animation != Enums.Direction.UP)
        sprite.setAnimation(Enums.Direction.UP);
      sprite.setY(sprite.getY()-player.speed);
    }

    if(pressed.active)
      sprite.start();

    if(!pressed.active) {
      sprite.stop();
    }
  };

  /**
   * This is a very basic game loop.
   * Kinetic already handles animation so we just need to
   * update sprite state based on controls.
   */
  var loop = function() {
    updatePlayer();
    requestAnimationFrame(loop);
  };

  // Begin!
  player.sprite.getImage().onload = function() {
    player.sprite.start();
    requestAnimationFrame(loop);
  };
});