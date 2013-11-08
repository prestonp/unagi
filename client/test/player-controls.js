define([
  '../lib/kinetic-v4.7.3.min.js'
, '../scripts/player.js'
],
function( Kinetic, Player ) {

  // Create new player
  var player = new Player();

  var stage = new Kinetic.Stage({
    container: 'container',
    width: 512,
    height: 512
  });


  var layer = new Kinetic.Layer();

  // set up rendering
  layer.add(player.sprite);
  player.sprite.start();
  
  // add the layer to the stage
  stage.add(layer);

  /* future design should include some kind of game loop */
  while(1) {
    
  }
});