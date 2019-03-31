import {gameStatusNarratives} from './narrative'
import {gStatus} from './status'

export function selectRandomfromArray(arr){
  if(arr.length===0) return null;
  return arr[Math.floor(Math.random()*arr.length)];
}

export function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

export function decideIfGameIsPlaying(status){
  let game, notification;
  const filteredStatus = status.filter(s=> s!==gStatus.HEALTHY && s!==gStatus.THIRSTY &&
      s!==gStatus.HUNGRY && s!==gStatus.STARVING && s!==gStatus.DEHYDRATED)
  if(filteredStatus.length===0){
      game = true;
      notification= null;
  } else{
    game = false;
    notification = filteredStatus.reduce((accum, s) => accum.concat(gameStatusNarratives[s], " "), "")
  }
  return {
    game,
    notification
  }
}
//exports a notification if necessary and game boolean
