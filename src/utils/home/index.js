import {selectRandomfromArray, randomIntFromInterval} from '../general/general'
import {descriptions} from './descriptions'
//
// home: {
//   description: chilly mound in a forest,
//   resources: {
//     food: high,
//     water: medium
//   },
//   risks: {
//     human: high,
//     animal: medium,
//     ant: low
//   },
//   weather: {
//     temperature: {desc: chilly, state: cold},
//     humidity: {desc: }
//   }
// }
// export default function determineDescriptor(num){
//   switch(num){
//     case >
//   }
// }
//very high, high, medium, low, very low


export default function generateHome(){
  let temp = selectRandomfromArray(descriptions.temperature)
  let humid = selectRandomfromArray(descriptions.humidity)
  let environ = selectRandomfromArray(descriptions.environment)
  let home = selectRandomfromArray(descriptions.home)
  let hrisk = selectRandomfromArray(descriptions.human)
  let newHome = {description: [`A ${humid.desc} and ${temp.desc} in a ${home} ${environ}, ${hrisk.desc}`],
      resources: {
        food: temp.resource,
        water: humid.resource
      },
      risk: {
        human: hrisk.risk,
        animal: 5,
        ant: 5
      },
      weather: {
        temperature: temp,
        humidity: humid
      }

  }
  return newHome

}
