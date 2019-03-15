import {selectRandomfromArray, randomIntFromInterval} from './general'
import {events} from './eventData'


export const choiceDesc = {
  birth: 'As the queen ant you dedicate most of your time and resources to spawning new eggs. The rest of colony is left to govern the home as usual.',
  expand: 'You command your workers to scout out new territory in search for more sources of food and water.',
  defend: 'To protect your workers, you command your colony to move cautiously and to not range too far from home.'
}

export function describeChoice(choice){
  return choiceDesc[choice]
}

export function generateEvent(reduxState){
  let {choice, home, store, ants, game, fuel} = reduxState
  let newState = {...reduxState}
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
  return { events,
    state: {
      ...newState, ants: updatedAnts, store: updatedStore
    }
  }
  //return new object
}



//calculate new ants object
  //birth rate depends on colony size and stores of food and water
    //store is flat num with percentage depending on workers
        //100% is 20 for each worker (max)
        //worker- 1, pupae- 1, larvae- 3, egg- 1
        //workers bring in 5 a day
    //birthrate increases with worker num 5 eggs w/ 0 workers and 20 eggs with 1000 workers
    //log function

export function calcNewStore(reduxState){
  let baseRate = 5
  let {ants, store, home} = reduxState;
  let maxStore = Math.max(200, ants.worker* 30)
  let waterRate = (1-(1/home.resources.water)) * ants.worker *baseRate;
  let foodRate = (1-(1/home.resources.food)) * ants.worker *baseRate;
  let deductFromStore = 0.3*ants.eggs + (ants.larvae * 3) + 0.5*ants.pupae + ants.worker + 10
  let newStore = {
    food: Math.min(maxStore, Math.floor(store.food + waterRate - deductFromStore)),
    water: Math.min(maxStore, Math.floor(store.water + foodRate - deductFromStore))
  }

  return newStore
}

//eggs turn into larvae => pupae => ants

export function calcCurrentAnts(reduxState, choice){
  let {ants, store} = reduxState;
  let bonus = (choice === "birth") ? 1.5: 1
  let foodPercentage = Math.max(150, ants.worker * 20)/store.food;
  let waterPercentage = Math.max(150, ants.worker * 20)/store.water;
  let storePercentage = (foodPercentage+ waterPercentage)/2
  let newEggNum = Math.floor((storePercentage*Math.log(Math.max(1, ants.worker))*0.3+6)*bonus)
  let newAntNums = {
    eggs: newEggNum,
    larvae: ants.eggs,
    pupae: ants.larvae,
    worker: ants.worker + ants.pupae
  }
  return newAntNums;
}

export function rollEvents(reduxState){
  let {home} = reduxState
  const disasters = []
  const miracles = []
  //rolls for each if rolls high, good thing
  //rolls for each if rolls low, disaster

  //temperature events
  let rollTemp = 100/(10-home.weather.temperature.risk)
  if(Math.random()*100<= rollTemp){
    let eventID = selectRandomfromArray(categories.temperature[home.weather.temperature.desc])
    let newEvent = events.temperature.filter(event=> event.id === eventID)[0]
    disasters.push(newEvent)
  }

  //water-related events
  let rollHumid = 100/(10-home.weather.humidity.risk)
  if(Math.random()*100 <=rollHumid){
    let eventID = selectRandomfromArray(categories.humidity[home.weather.humidity.desc])
    let newEvent = events.humidity.filter(event=> event.id === eventID)[0];
    disasters.push(newEvent)
  }

  //animal events
  let rollAnimal = 100/(10-home.risk.animal)
  if(Math.random()*100 <= rollAnimal){
    let eventID = selectRandomfromArray(categories.animal);
    let newEvent = events.humidity.filter(event=> event.id ===eventID)[0];
    disasters.push(newEvent)
  }

  //human related events
  let rollHuman = 100/(10-home.risk.human)
  if(Math.random()*100 <= rollHuman){
    let eventID = selectRandomfromArray(categories.human);
    let newEvent = events.humidity.filter(event=> event.id === eventID)[0];
    disasters.push(newEvent)
  }

  //ant related events
  let rollAnt = 100/(10-home.risk.ant)
  if(Math.random()*100 <= rollAnt){
    let eventID = selectRandomfromArray(categories.ant);
    let newEvent = events.humidity.filter(event=> event.id === eventID)[0];
    disasters.push(newEvent)
  }

  if(disasters.length === 0){
    return null
  } else{
    return disasters[Math.floor(Math.random()*disasters.length)]
  }
}

//categories filled with possible event IDs for each property
export const categories = {
  temperature: {
    frozen: ["t1", "t2", "t3"],
    cold: ["t1", "t2", "t3"],
    chilly: ["t1", "t2", "t3"],
    mild: ["t1", "t2", "t3"],
    warm: ["t1", "t2", "t3"],
    hot: ["t1", "t2", "t3"],
    searing: ["t1", "t2", "t3"]
  },
  humidity: {
    'very wet': ["h1"],
    wet: ['h1'],
    dry: ['h1'],
    'very dry': ['h1']
  },
  animal: ['e1'],
  human: ['hu1'],
  ant: ['a1']

}

//output is a object with description of event and new State
//ex. {newState: state, desc:description}
//
// descobject ={
//   firstPara = choice desc;
//   positive = positive events
//   negative = negative events
// }

//depending on choice, add different amounts of resources
//birth decreases resources and increases eggs

//expand has possibility of increasing of increasing food and water resource generation

//defend decreases death in event of an event

//change home

export function compileEffects(events){
  if(!events) return []
  let effects = events.reduce((accum, curr) => [...accum, ...curr.effects], [])
  return effects
}

export function addUpEffects(effects){
  return effects.reduce((accum, effect)=> accum+effect.number, 0)
}

export function calcEventEffects(event, reduxState){
  if(!event) return [];
  let {ants, store, home} = reduxState
  let effect;
  let value;
  if(event.type=== 'ant'){
    effect = Math.floor(ants[event.subtype]*event.number) - ants[event.subtype]
    value = (effect>=0)? '+': '-';
  }
  if(event.type=== 'resource'){
    effect = event.number
  }
  return {
    type: event.type,
    subtype: event.subtype,
    value,
    number: effect
  }
}
