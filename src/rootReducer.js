import {SET_HOME} from './actionCreators'

const initialState = {
  workerAnts: 0,
  store: {
    food: 70,
    water: 70
  },
  fuel: 100,
  home: null,
  page: 'enter'
}

export default function rootReducer(state=initialState, action){
  switch(action.type){
    case SET_HOME:
      return {
        ...state,
        home: action.home
      };
    default:
      return state;
  }
}
