module.exports = function longestConsecutivelng(array)
{
  array.sort(function(a,b){return a - b});
  var count = 1, res = 0;
  var lng = array.length;
  for(var i = 0;i < lng; i++)
  {
      if(lng == 0)
    {
          res = 0;
    }
      else if(lng == 1)
    {
          res = 1;
    }
      if(array[i] == array[i + 1])
    {
          continue;
    }
      if(array[i] == array[i + 1] - 1)
    {
          count++;
    }
      else{
          count = 1;
    }
      if(count > res)
    {
          res = count;
    }
  }
      return res;
}