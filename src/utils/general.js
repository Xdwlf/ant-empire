
export function selectRandomfromArray(arr){
  if(arr.length===0) return null;
  return arr[Math.floor(Math.random()*arr.length)];
}

export function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
