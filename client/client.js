var stage = new Kinetic.Stage({
  container: 'container',
  width: 512,
  height: 512
});

var layer = new Kinetic.Layer();

var rect = new Kinetic.Rect({
  x: 239,
  y: 75,
  width: 100,
  height: 50,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 4
});

var height = width = 16;

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
var imageObj = new Image();
imageObj.onload = function() {
  var sprite = new Kinetic.Sprite({
    x: 0,
    y: 0,
    image: imageObj,
    animation: 'down',
    animations: animations,
    frameRate: 7,
    index: 0,
    scaleX: 3,
    scaleY: 3
  });

  // add the shape to the layer
  layer.add(sprite);
  sprite.start();
  // add the shape to the layer
  layer.add(rect);

  // add the layer to the stage
  stage.add(layer);
};
imageObj.src = './basictiles.png';
