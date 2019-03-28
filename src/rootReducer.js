import {SET_HOME, UPDATE_FUEL, SET_STORE, UPDATE_GAMESTATUS, UPDATE_CHOICE, UPDATE_ALL, SET_EVENT, RESET_STATE} from './actionCreators'
import {gStatus} from './utils/general/status'

const initialState = {
  ants: {
    eggs:0,
    larvae:0,
    pupae: 0,
    worker: 0
  },
  store: {
    food: 150,
    water: 150
  },
  fuel: 100,
  home: null,
  page: 'enter',
  choice: null,
  game: true,
  event: [],
  status: [gStatus.HEALTHY]
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
    case SET_STORE:
      return {
        ...state,
        store: action.store
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
    case SET_EVENT:
      return{
        ...state,
        event: action.event
      }
    case RESET_STATE:
      return{
        ...initialState
      }
    default:
      return state;
  }
}
