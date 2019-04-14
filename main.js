function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}
var a;
var map = new Map(10, 10);
map.init();
drawMap(map);

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