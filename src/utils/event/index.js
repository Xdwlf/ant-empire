import {selectRandomfromArray, randomIntFromInterval, decideIfGameIsPlaying} from '../general/general'
import {gameOver} from '../general/gameHelpers'
import {calcNewStore} from './calcStore'
import {calcCurrentAnts} from './calcAnts'
import {categories} from './categories'
import {eventsData} from './data'
import {categorizeRisk} from './categorizeRisk'
import {choiceData} from './choiceCategories'

export function generateEvent(reduxState){
  let {choice} = reduxState
  let state = {...reduxState}
  let events = []
  let updatedAnts = calcCurrentAnts(reduxState, choice)
  let updatedStore = calcNewStore(reduxState)
  events.push(selectRandomfromArray(choiceData[choice]))
  // calculate possiblity of events
  let event = rollEvents(reduxState)
  if(event) events.push(event)
  //check gameover
  let {narrative, newState} = gameOver({
    ...state, ants: updatedAnts, store: updatedStore
  })
  //determine if the event rolled will affect game status
  let statusEffect = (event)? event.effects.filter(effect=> effect.type ==="status"):null
  newState.status = (event && statusEffect.length>0)? [...newState.status, statusEffect[0].status] : newState.status
  //if gameover, add description to end of narrative
  let {game, notification} = decideIfGameIsPlaying(newState.status)
  return {
    narrative,
    events,
    state: Object.assign({}, {
      ...newState, ants: updatedAnts, store: updatedStore, notification, game
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
    let eventID = selectRandomfromArray(categories.animal[categorizeRisk(home.risk.animal)]);
    let newEvent = eventsData.animal.filter(event=> event.id ===eventID)[0];
    disasters.push(newEvent)
  }

  //human related events
  let rollHuman = 100/(10-home.risk.human)
  if(Math.random()*100 <= rollHuman){
    let eventID = selectRandomfromArray(categories.human[categorizeRisk(home.risk.human)]);
    let newEvent = eventsData.human.filter(event=> event.id === eventID)[0];
    disasters.push(newEvent)
  }


  //ant related events
  let rollAnt = 100/(10-home.risk.ant)
  if(Math.random()*100 <= rollAnt){
    let eventID = selectRandomfromArray(categories.ant[categorizeRisk(home.risk.ant)]);
    let newEvent = eventsData.ant.filter(event=> event.id === eventID)[0];
    disasters.push(newEvent)
  }

  if(disasters.length === 0){
    return null
  } else{
    return disasters[Math.floor(Math.random()*disasters.length)]
  }
}
