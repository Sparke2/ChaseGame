var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var image = new Bitmap('Wheat1-1.png', 144, 144);


function displayPlanetAtElement(planet, element_id)
{
  var toHTML = "";
  document.getElementById(element_id).innerHTML = toHTML;
}

/* DRAWING AN IMAGE helper
void ctx.drawImage(image, dx, dy);
void ctx.drawImage(image, dx, dy, dWidth, dHeight);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
*/

function drawMap(map)
{
	for (var i = 0; i < map.cells_x; i++)
	{
		for (var j = 0; j < map.cells_y; j++)
		{
			ctx.drawImage(image, map.cells[i][j].pos_x, map.cells[i][j].pos_y);
		}
	}
}