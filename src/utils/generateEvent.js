import {selectRandomfromArray, randomIntFromInterval} from './general'


export const choiceDesc = {
  birth: 'As the queen ant you dedicate most of your time and resources to spawning new eggs. The rest of colony is left to govern the home as usual.',
  expand: 'You command your workers to scout out new territory in search for more sources of food and water.',
  defend: 'To protect your workers, you command your colony to move cautiously and to not range too far from home.'
}

export function generateEvent(reduxState){
  let {choice, home, store, ants, game, fuel} = reduxState
  let newState = {...reduxState}
  let updatedAnts = calcCurrentAnts(reduxState)
  let updatedStore = calcNewStore(reduxState)
  // calculate possiblity of events
  let events = rollEvents(reduxState)

  console.log(ants, updatedAnts)
  return { event: null,
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
  let {ants, store, home} = reduxState;
  let waterRate = Math.floor(1/home.resources.water * ants.worker);
  let foodRate = Math.floor(1/home.resources.water * ants.worker);
  let deductFromStore = ants.eggs + (ants.larvae * 3) + ants.pupae + ants.worker + 10
  let newStore = {
    food: store.food + waterRate - deductFromStore,
    water: store.water + foodRate - deductFromStore
  }

  return newStore
}

//eggs turn into larvae => pupae => ants


export function calcCurrentAnts(reduxState){
  let {ants, store} = reduxState;
  console.log(ants)
  let foodPercentage = ants.worker * 20/store.food;
  let waterPercentage = ants.worker * 20/store.water;
  let storePercentage = (foodPercentage+ waterPercentage)/2
  let newEggNum = storePercentage*Math.log(Math.max(1, ants.worker))*0.6+5
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

  //temperature
  let rollTemp = 50/home.weather.temperature.risk
  if(Math.random()*100<= rollTemp){
    let randomDisast = selectRandomfromArray(disasterEvents.temperature[home.weather.temperature.desc])
    disasters.push(randomDisast)
  }
      //max 20% chance
          //50/10
      //min 5% chance
  //humidity
  //food
  //water
  //human
  //animal
  //ant
}

export const disasterEvents = {
  temperature: {
    frozen: [
      {description: "A freak snowstorm blows through. Many of your ants are caught while out gathering food and freeze to death",
      effects: {
      type: "ant",
      subtype: 'worker',
      effect: 0.7 }},
      {
        description: 'The snow piles up and moving around becomes harder for your workers. You end up having to rely on your stores for while.',
        effects:{
          type: 'resource',
          subtype: 'food',
          effect: 0.8
        }
      },
      {
        description: 'A sudden hailstorm batters your colony. You lose some of your workers.',
        effect: {
          type: 'ant',
          subtype: 'worker',
          effect: 0.9
        }
      }
    ],
    cold: [
      {description: "Cold: A freak snowstorm blows through. Many of your ants are caught while out gathering food and freeze to death",
      effects: {
      type: "ant",
      subtype: 'worker',
      effect: 0.7 }},
      {
        description: 'Cold: The snow piles up and moving around becomes harder for your workers. You end up having to rely on your stores for while.',
        effects:{
          type: 'resource',
          subtype: 'food',
          effect: 0.8
        }
      },
      {
        description: 'Cold: A sudden hailstorm batters your colony. You lose some of your workers.',
        effect: {
          type: 'ant',
          subtype: 'worker',
          effect: 0.9
        }
      }
    ]
  },
  humidity: []
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
