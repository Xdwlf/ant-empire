import {gStatus} from './status'
import {gameStatusNarratives} from './narrative'

export function gameOver(reduxState){
  let status = [...reduxState.status];
  if(reduxState.store.food === 0){
    if(status.some(s=> s=== gStatus.HUNGRY)){
      status = status.map(s=> (s=== gStatus.HUNGRY) ? gStatus.STARVING: s)
    }else if(status.some(s=> s=== gStatus.STARVING)) {
      status = status.map(s=>(s=== gStatus.STARVING) ? gStatus.DEATH_BY_STARVATION:s
      )
    }else{
      status = status.filter(s => s!== gStatus.HEALTHY);
      status = [...status, gStatus.HUNGRY]
    }
  }
  if(reduxState.store.water === 0){
    if(status.some(s=> s=== gStatus.THIRSTY)){
      status = status.map(s=> (s=== gStatus.THIRSTY) ? gStatus.DEHYDRATED: s)
    }else if(status.some(s=> s=== gStatus.DEHYDRATED)) {
      status = status.map(s=> (s=== gStatus.DEHYDRATED) ? gStatus.DEATH_BY_DEHYDRATION: s)
    }else{
      status = status.filter(s => s!== gStatus.HEALTHY);
      status = [...status, gStatus.THIRSTY]
    }
  }
  if(reduxState.store.water!==0){
    status = status.filter(s=> (s!== gStatus.THIRSTY && s!== gStatus.DEHYDRATED))
  }
  if(reduxState.store.food!==0){
    status = status.filter(s=> (s!== gStatus.HUNGRY && s!== gStatus.STARVING))
  }

  let narrative = status.map(s=> gameStatusNarratives[s])
  return {
    narrative,
    newState: {
      ...reduxState, status
    }
  }
}
