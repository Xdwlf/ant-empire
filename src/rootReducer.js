import {SET_HOME, UPDATE_FUEL, SET_STORE, UPDATE_GAMESTATUS, UPDATE_CHOICE, UPDATE_ALL, SET_EVENT, RESET_STATE, UPDATE_NOTIFICATION, ADD_DAY, RECORD_HOME, UPDATE_MAX_ANTS} from './actionCreators'
import {gStatus} from './utils/general/status'

const initialState = {
  ants: {
    eggs:0,
    larvae:0,
    pupae: 0,
    worker: 0
  },
  store: {
    food: 200,
    water: 200
  },
  notification: null,
  fuel: 100,
  home: null,
  page: 'enter',
  choice: null,
  game: true,
  event: [],
  status: [gStatus.HEALTHY],
  stats : {
    day: 1,
    homes: [],
    maxAnts: 1
  }
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
    case UPDATE_NOTIFICATION:
      return {
        ...state,
        notification: action.notification
      }
    case ADD_DAY:{
      const stats = {...state.stats, day: state.stats.day+1}
      return{
        ...state, stats
      }
    }
    case RECORD_HOME:{
      const homes = [...state.stats.homes, action.home]
      const stats = {...state.stats, homes}
      return{
        ...state,
        stats
      }
    }
    case UPDATE_MAX_ANTS:{
      const currentAnts = state.stats.maxAnts
      const maxAnts = (action.ants> currentAnts)? action.ants: currentAnts
      const stats = {...state.stats, maxAnts}
      return{
        ...state,
        stats
      }
    }

    default:
      return state;
  }
}
