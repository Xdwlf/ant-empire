import {SET_HOME, UPDATE_FUEL, UPDATE_GAMESTATUS} from './actionCreators'

const initialState = {
  workerAnts: 0,
  store: {
    food: 70,
    water: 70
  },
  fuel: 100,
  home: null,
  page: 'enter',
  game: true
}

export default function rootReducer(state=initialState, action){
  switch(action.type){
    case SET_HOME:
      return {
        ...state,
        home: action.home
      };
    case UPDATE_FUEL:
      return {
        ...state,
        fuel: action.fuel
      }
    case UPDATE_GAMESTATUS:
      return{
        ...state,
        game: action.game
      }
    default:
      return state;
  }
}
