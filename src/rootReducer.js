import {SET_HOME, UPDATE_FUEL, UPDATE_GAMESTATUS, UPDATE_CHOICE, UPDATE_ALL} from './actionCreators'

const initialState = {
  ants: {
    eggs:0,
    larvae:0,
    pupae: 0,
    worker: 0
  },
  store: {
    food: 70,
    water: 70
  },
  fuel: 100,
  home: null,
  page: 'enter',
  choice: null,
  game: true,
  event: null
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
    case UPDATE_CHOICE:
      return{
        ...state,
        choice: action.choice
      }
    case UPDATE_ALL:
      return{
        ...action.state
      }
    default:
      return state;
  }
}
