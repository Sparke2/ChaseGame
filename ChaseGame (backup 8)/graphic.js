var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var btm = new Bitmap("Images/Wheat1-1.png", 144, 144);
var day_length = 500;
//var img = new Image();
//img.src = "Images/Wheat1-1.png";


function displayPlanetAtElement(planet, element_id)
{
	var toHTML = "";
	document.getElementById(element_id).innerHTML = toHTML;
}

function clearCanvas()
{
	ctx.clearRect(0,0,map.max_x, map.max_y);
}

/* DRAWING AN IMAGE helper
void ctx.drawImage(image, dx, dy);
void ctx.drawImage(image, dx, dy, dWidth, dHeight);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
*/

function drawMap(map)
{
	// Set the color determining the time of day
	//document.getElementById("canvas").style.backgroundColor = 'rgba(158, 167, 184, 0.3)'; 

	drawInit();
	//colorizeTimeOfDay("canvas");
	for (var i = 0; i < map.cells_x; i++)
	{
		for (var j = 0; j < map.cells_y; j++)
		{
			btm.image = new Image();
			btm.image.src = "Images/Wheat1-" + map.cells[i][j].food_herbivore + ".png";
			ctx.drawImage(btm.image, map.cells[i][j].pos_x, map.cells[i][j].pos_y, btm.width, btm.height);
		}
	}
}

function drawAnimals(map)
{
	for (var i = 0; i < map.herbivores.length; i++)
	{
    	ctx.save();
		var img = new Image();
		img.src = map.herbivores[i].icon;

    	ctx.translate(map.herbivores[i].x + map.herbivores[i].size_x / 2, map.herbivores[i].y + map.herbivores[i].size_y / 2);
    	ctx.rotate(map.herbivores[i].rot * Math.PI / 180);
		ctx.drawImage(img, map.herbivores[i].size_x / -2, map.herbivores[i].size_y / -2, map.herbivores[i].size_x, map.herbivores[i].size_y);
		ctx.restore();
	}
}

function Bitmap(src, width, height) {
	this.image = new Image();
	this.image.src = src;
	this.width = width;
	this.height = height;
}

function colorizeTimeOfDay(element_id)
{
	if(step_counter % day_length < day_length / 2)
	{
		// Day.
		document.getElementById(element_id).style.backgroundColor = 'rgba(158, 167, 184, 0.3)';
	}
	else
	{
		// Night otherwise.
		document.getElementById(element_id).style.backgroundColor = 'rgba(158, 167, 184, 0.8)';
	}
}

function drawInit()
{
	if(step_counter % day_length < day_length / 2)
	{
		// Day.
		ctx.fillStyle = "#BFBFBF";
	}
	else
	{
		// Night.
		ctx.fillStyle = "#555555";
	}
	ctx.fillRect(0, 0, map.max_x, map.max_y);
}