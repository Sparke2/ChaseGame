function Animal(x,y,rot,diet)
{
  this.type = "Meta herbivore";
  this.diet = diet;

  this.x = x;
  this.y = y;
  this.rot = rot;

  this.mass = 100;
  this.avg_speed = 10;
  this.current_speed = 10;
  this.acceleration = this.avg_speed / this.mass;
  this.move_mode = 0;
  // 0 - staying
  // 1 - moving
  // 2 - moving fast
  // 3 - charging

  this.max_food = 5000;
  this.food = 3000;

  this.target = {}; // Target = {x, y}

  this.icon ="Images/Carnivore1.png";
  this.size_x = 40;
  this.size_y = 40;
}

Animal.prototype.move = function() {
  this.x += this.current_speed * Math.sin(this.rot * Math.PI / 180);
  this.y += -1 * this.current_speed * Math.cos(this.rot * Math.PI / 180);



  console.log(this.current_speed * Math.sin(this.rot * Math.PI / 180), this.current_speed * Math.cos(this.rot * Math.PI / 180), this.rot);


/*
  this.current_speed += this.acceleration * (0.3 + this.move_mode - 1);
  if(this.current_speed < 0)
  {
    this.current_speed = 0;
  }
  if(this.current_speed < 2 & this.move_mode != 0)
  {
    this.current_speed = 2;
  }
  */
  this.current_speed = 1;
};

Animal.prototype.rotate = function(angle) {
  this.rot += angle;
};


Animal.prototype.chose_movemode = function() {
  this.move_mode = 2;
};

Animal.prototype.randomize = function() {
};

function randomSpawnHerbivore(num_herbivores, map)
{
  for (var i = 0; i < num_herbivores; i++)
  {
    var spawn_x = randomInteger(1, map.max_x);
    var spawn_y = randomInteger(1, map.max_y);
    var spawn_rot = randomInteger(0,179);

    map.herbivores[i] = new Animal(spawn_x, spawn_y, spawn_rot, "herbivore");
    //console.log(spawn_x, spawn_y, spawn_rot);
  }
}

function debug_applyRot()
{
  map.herbivores[0].rot = parseInt(document.getElementById("rotation_manual").value);
}