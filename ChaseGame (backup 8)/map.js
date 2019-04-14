var cell_height = 144;
var cell_width = 144;

function Map(cells_x,cells_y)
{
  this.max_x = cells_x * cell_height;
  this.max_y = cells_y * cell_width;

  this.cells_x = cells_x;
  this.cells_y = cells_y;

  this.herbivores = new Array();

  this.cells = matrixArray(cells_x,cells_y);
}

function Cell() // Each Cell is a 144x144 grid
{
  this.pos_x = 0;
  this.pos_y = 0;

  this.max_x = 0;
  this.max_y = 0;

  this.food_herbivore = 0;
  this.food_carnivore = 0;
}

function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = null;
    }
  }
  return arr;
}

Cell.prototype.randomize = function() {
  var a = randomInteger(1, 200);
    if (a>=100) {
      this.food_herbivore = 0;
    }
    else
    {
    	this.food_herbivore = Math.floor(a / 10);
    }
};

Map.prototype.init = function() {
  for (var i=0; i< this.cells_x; i++)
  {
  	for (var j=0; j< this.cells_y; j++)
  	{
  		this.cells[i][j] = new Cell();
  		this.cells[i][j].pos_x = i * cell_width;
  		this.cells[i][j].pos_y = j * cell_height;

  		this.cells[i][j].max_x = i * cell_width + cell_width - 1;
  		this.cells[i][j].max_y = j * cell_height + cell_height - 1;

  		this.cells[i][j].randomize();
  		//console.log(this.cells[i][j]);
  	}
  }
};



Map.prototype.getCell = function(x,y) {

// Get the Cell by specified coordinates

  if(x > this.max_x || y > this.max_y)
  {
  	console.log("ERROR: out of map");
  }
  else
  {

	var cell_x = Math.floor(x / cell_width);
	var cell_y = Math.floor(y / cell_height);

  	//console.log("Food = ", this.cells[cell_x][cell_y].food_herbivore);
  	console.log("Cell.x = ", this.cells[cell_x][cell_y].min_x);
  	console.log("Cell.y = ", this.cells[cell_x][cell_y].min_y);
  }
};