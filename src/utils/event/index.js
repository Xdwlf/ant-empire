import {selectRandomfromArray, randomIntFromInterval} from '../general/general'
import {gameOver} from '../general/gameHelpers'
import {calcNewStore} from './calcStore'
import {calcCurrentAnts} from './calcAnts'
import {categories} from './categories'
import {eventsData} from './data'

export function generateEvent(reduxState){
  let {choice} = reduxState
  let state = {...reduxState}
  let events = [{description: 'filler',
                  subtype: 'filling',
                effects: [{
                  type: 'filler',
                  subtype: 'filler',
                  number: 0.3
                }]}]
  let updatedAnts = calcCurrentAnts(reduxState, choice)
  let updatedStore = calcNewStore(reduxState)
  // calculate possiblity of events
  let event = rollEvents(reduxState)
  if(event) events.push(event)
  //check gameover
  let {narrative, newState} = gameOver({
    ...state, ants: updatedAnts, store: updatedStore
  })
  //if gameover, add description to end of narrative
  return {
    narrative,
    events,
    state: Object.assign({}, {
      ...newState, ants: updatedAnts, store: updatedStore
    })
  }
  //return new object
}

export function rollEvents(reduxState){
  let {home} = reduxState
  const disasters = []
  //rolls for each if rolls high, good thing
  //rolls for each if rolls low, disaster
  //temperature events
  let rollTemp = 100/(10-home.weather.temperature.risk)
  if(Math.random()*100<= rollTemp){
    let eventID = selectRandomfromArray(categories.temperature[home.weather.temperature.desc])
    let newEvent = eventsData.temperature.filter(event=> event.id === eventID)[0]
    disasters.push(newEvent)
  }

  //water-related events
  let rollHumid = 100/(10-home.weather.humidity.risk)
  if(Math.random()*100 <=rollHumid){
    let eventID = selectRandomfromArray(categories.humidity[home.weather.humidity.desc])
    let newEvent = eventsData.humidity.filter(event=> event.id === eventID)[0];
    disasters.push(newEvent)
  }

  //animal events
  let rollAnimal = 100/(10-home.risk.animal)
  if(Math.random()*100 <= rollAnimal){
    let eventID = selectRandomfromArray(categories.animal);
    let newEvent = eventsData.humidity.filter(event=> event.id ===eventID)[0];
    disasters.push(newEvent)
  }

  //human related events
  let rollHuman = 100/(10-home.risk.human)
  if(Math.random()*100 <= rollHuman){
    let eventID = selectRandomfromArray(categories.human);
    let newEvent = eventsData.humidity.filter(event=> event.id === eventID)[0];
    disasters.push(newEvent)
  }

  //ant related events
  let rollAnt = 100/(10-home.risk.ant)
  if(Math.random()*100 <= rollAnt){
    let eventID = selectRandomfromArray(categories.ant);
    let newEvent = eventsData.humidity.filter(event=> event.id === eventID)[0];
    disasters.push(newEvent)
  }

  if(disasters.length === 0){
    return null
  } else{
    return disasters[Math.floor(Math.random()*disasters.length)]
  }
}
