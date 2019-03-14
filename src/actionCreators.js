export const SET_HOME = "SET_HOME";
export const UPDATE_FUEL = "UPDATE_FUEL"
export const UPDATE_GAMESTATUS = "UPDATE_GAMESTATUS"
export const UPDATE_CHOICE = 'UPDATE_CHOICE'
export const UPDATE_ALL = "UPDATE_ALL"
export const SET_EVENT = "SET_EVENT"

export function setHome(home){
  return {
    type: SET_HOME,
    home
  }
}

export function updateFuel(fuel){
  return {
    type: UPDATE_FUEL,
    fuel
  }
}

export function updateGameStatus(game){
  return{
    type: UPDATE_GAMESTATUS,
    game
  }
}

export function updateChoice(choice){
  return{
    type: UPDATE_CHOICE,
    choice
  }
}

export function updateAll(state){
  return{
    type: UPDATE_ALL,
    state
  }
}

export function setEvent(event){
  return{
    type: SET_EVENT,
    event
  }
}
