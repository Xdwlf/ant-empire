import {selectRandomfromArray, randomIntFromInterval} from './general'
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
const descriptions = {
  temperature: [{desc: 'frozen', risk: 10, resource: 3},{desc: 'cold', risk: 8, resource: 4},{
    desc: 'chilly', risk: 5, resource: 5},{desc: 'mild', risk: 2, resource: 5},
    {desc: 'warm', risk: 3, resource: 6},{
    desc: 'hot', risk: 5, resource: 6}, {desc: 'searing', risk: 8, resource: 3
  }],
  humidity: [{desc: 'very wet', risk: 8, resource:6}, {desc: 'wet', risk: 5, resource: 5},
  {desc: 'dry', risk: 7, resource: 4}, {desc: 'very dry', risk: 10, resource:3}],
  environment: ['in a forest', 'in the mountains', 'by a meadow', 'in a clearing',
    'on the side of a hill'],
  home: ['mound', 'crack', 'abandoned ant colony', 'hole'],
  human: [{desc: 'There is a human city located nearby', risk: 10},
    {desc: 'Your new home is located on the outskirts of human civilization', risk: 8},
    {desc: 'Human trails can be seen here, but there are few dwellings in direct line of sight', risk: 6},
    {desc: 'The scent of humans here is faint', risk: 5},
    {desc: 'You can tell that humans do not gather or dwell near here.', risk: 4}]
}

export default function generateHome(){
  let temp = selectRandomfromArray(descriptions.temperature)
  let humid = selectRandomfromArray(descriptions.humidity)
  let environ = selectRandomfromArray(descriptions.environment)
  let home = selectRandomfromArray(descriptions.home)
  let hrisk = selectRandomfromArray(descriptions.human)
  let newHome = {description: `A ${humid.desc} and ${temp.desc} in a ${home} ${environ}, ${hrisk.desc}`,
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
