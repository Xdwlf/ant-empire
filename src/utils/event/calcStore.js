
export function calcNewStore(reduxState){
  let baseRate = 4
  let {ants, store, home} = reduxState;
  let maxStore = Math.max(200, ants.worker* 30)
  let waterRate = (1-(1/home.resources.water)) * ants.worker *baseRate;
  let foodRate = (1-(1/home.resources.food)) * ants.worker *baseRate;
  let deductFromStore = 0.3*ants.eggs + (ants.larvae * 3) + 0.5*ants.pupae + ants.worker + 10
  let newStore = {
    food: Math.max(0, Math.min(maxStore, Math.floor(store.food + waterRate - deductFromStore))),
    water: Math.max(0, Math.min(maxStore, Math.floor(store.water + foodRate - deductFromStore)))
  }
  return newStore
}
