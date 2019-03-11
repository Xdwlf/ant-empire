export const SET_HOME = "SET_HOME";
export const UPDATE_FUEL = "UPDATE_FUEL"
export const UPDATE_GAMESTATUS = "UPDATE_GAMESTATUS"

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
