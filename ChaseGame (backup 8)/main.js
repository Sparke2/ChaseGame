function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}
var a;
var step_counter = 0;
var map = new Map(10, 10);
var active = true;
map.init();
drawMap(map);
randomSpawnHerbivore(1, map);

/*
function GameLoop() {
  this.frame = this.frame.bind(this);
  this.lastTime = 0;
  this.callback = function() {};
}
GameLoop.prototype.start = function(callback) {
  this.callback = callback;
  requestAnimationFrame(this.frame);
};
GameLoop.prototype.frame = function(time) {
  var seconds = (time - this.lastTime) / 1000;
  this.lastTime = time;
  if (seconds < 0.2) this.callback(seconds);
  requestAnimationFrame(this.frame);
};
var loop = new GameLoop();
*/

function next_step() {
  if(active)
  {
    step_counter++;
    //clearCanvas();
    drawMap(map);
    drawAnimals(map);
    //console.log(step_counter);
    lifecycle();
  }
}

setInterval(next_step, 100);

//map.getCell(111288,154); // get Cell by coordinates

function randomSquare(array)
{
  var mid = 0;
  for (var i=0;i<array.length;i++)
  {
    mid += array[i];
  }
  mid = mid/array.length;

  //alert(mid);
  var sqre = 0;
  for (var i=0;i<array.length;i++)
  {
    sqre += (array[i] - mid) * (array[i] - mid);
  }
  sqre = sqre / array.length;
  sqre = Math.sqrt(sqre);

  alert(sqre);
}

function debug_startStop()
{
  active = !active;
}