
export function calculateStoreDeductionForTravel(reduxState){
  let {store, ants} = reduxState;
  let baseRate = 10
  let deductFromStore = 0.3*ants.eggs + (ants.larvae * 3) + 0.5*ants.pupae + ants.worker + baseRate
  let newStore = {
    food: Math.max(0, Math.floor(store.food - deductFromStore)),
    water: Math.max(0, Math.floor(store.water - deductFromStore))
  }
  return newStore
}

export function packUpAndGo(store, ants){
  let newStore = {
    food: Math.min(store.food, Math.max(ants.worker*15, 200)),
    water: Math.min(store.water, Math.max(ants.worker*15, 200))
  }
  return newStore
}
