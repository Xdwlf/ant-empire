export function calcCurrentAnts(reduxState, choice){
  let {ants, store} = reduxState;
  let bonus = (choice === "birth") ? 1.5: 1
  let foodPercentage = Math.max(1, store.food)/Math.max(200, ants.worker * 30);
  let waterPercentage = Math.max(1,store.water)/Math.max(200, ants.worker * 30);
  let storePercentage = (foodPercentage+ waterPercentage)/2
  let newEggNum = Math.floor((storePercentage*Math.log(Math.max(1, ants.worker))*0.3+6)*bonus)
  let newAntNums = {
    eggs: Math.max(0, newEggNum),
    larvae: Math.max(0, ants.eggs),
    pupae: Math.max(0, ants.larvae),
    worker: Math.max(ants.worker + ants.pupae, 0)
  }
  return newAntNums;
}
