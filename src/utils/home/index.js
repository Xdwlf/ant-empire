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
  let anirisk = selectRandomfromArray(descriptions.animal)
  let hrisk = selectRandomfromArray(descriptions.human)
  let arisk = selectRandomfromArray(descriptions.ant)
  const story = [temp.story.concat(humid.story, environ.story), anirisk.story.concat(hrisk.story, arisk.story), home.story]
  let currentHome = {description: [`A ${humid.desc} and ${temp.desc} in a ${home.desc} ${environ.desc}.`],
      resources: {
        food: temp.resource,
        water: humid.resource
      },
      risk: {
        human: hrisk.risk,
        animal: 5,
        ant: arisk.risk
      },
      weather: {
        temperature: {
          desc: temp.desc,
          risk: temp.risk
        },
        humidity: {
          desc: humid.desc,
          risk: humid.risk
        }
      }

  }
  return {
    story,
    currentHome
  }

}
