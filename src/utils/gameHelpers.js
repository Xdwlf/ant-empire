export function gameOver(reduxState){
  //check if all stores are 0
  //check status
  let status = [...reduxState.status];
  if(reduxState.store.food === 0){
    if(status.some(s=> s== gStatus.HUNGRY)){
      status = status.map(s=>{
        if(s=== gStatus.HUNGRY) return gStatus.STARVING
      })
    }else if(status.some(s=> s== gStatus.STARVING)) {
      status = status.map(s=>{
        if(s=== gStatus.STARVING) return gStatus.DEATH_BY_STARVATION
      })
    }else{
      status = status.filter(s => s!== gStatus.HEALTHY);
      status = [...status, gStatus.HUNGRY]
    }
  }
  if(reduxState.store.water === 0){
    if(status.some(s=> s== gStatus.THIRSTY)){
      status = status.map(s=>{
        if(s=== gStatus.THIRSTY) return gStatus.DEHYDRATED
      })
    }else if(status.some(s=> s== gStatus.DEHYDRATED)) {
      status = status.map(s=>{
        if(s=== gStatus.DEHYDRATED) return gStatus.DEATH_BY_DEHYDRATION
      })
    }else{
      status = status.filter(s => s!== gStatus.HEALTHY);
      status = [...status, gStatus.THIRSTY]
    }
  }
  let narrative = status.map(s=> gameStatusNarratives[s])
  return {
    narrative,
    newState: {
      ...reduxState, status
    }
  }
}



export const gStatus = {
  HEALTHY : "HEALTHY",
  HUNGRY : "HUNGRY",
  THIRSTY : "THIRSTY",
  STARVING: "STARVING",
  DEHYDRATED: "DEHYDRATED",
  DEATH_BY_STARVATION: "DEATH_BY_STARVATION",
  DEATH_BY_DEHYDRATION : "DEATH_BY_DEHYDRATION",
  KILLED_BY_ANTS : "KILLED_BY_ANTS",
  KILLED_BY_HUMANS : "KILLED_BY_HUMANS",
  KILLED_BY_PREDATORS : "KILLED_BY_PREDATORS",
  CAPTURED_BY_ANTS : "CAPTURED_BY_ANTS",
  CAPTURED_BY_HUMANS : "CAPTURED_BY_HUMANS"
}

export const gameStatusNarratives = {
  HEALTHY: "Your colony is healthy and thriving.",
  HUNGRY : "Your colony is hungry. If you do not find more food soon, your colony will die.",
  THIRSTY : "Your colony is thirsty. If you do not find more water soon, your colony will die.",
  STARVING: "Your ants are STARVING! Some of your ants have died from starvation and the rest will follow soon.",
  DEHYDRATED: "Your ants are DEHYDRATED! Some of your ants have died from lack of water and the rest will follow soon.",
  DEATH_BY_STARVATION: "All of your colony has slowly withered from the lack of food. ",
  DEATH_BY_DEHYDRATION : "Your ants have dried up!",
  KILLED_BY_ANTS : "KILLED_BY_ANTS",
  KILLED_BY_HUMANS : "KILLED_BY_HUMANS",
  KILLED_BY_PREDATORS : "KILLED_BY_PREDATORS",
  CAPTURED_BY_ANTS : "CAPTURED_BY_ANTS",
  CAPTURED_BY_HUMANS : "CAPTURED_BY_HUMANS"
}
