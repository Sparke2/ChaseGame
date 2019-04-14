function lifecycle()
{
  for(var i = 0; i < map.herbivores.length; i++)
  {
    map.herbivores[i].chose_movemode();
    map.herbivores[i].move();
  }
}