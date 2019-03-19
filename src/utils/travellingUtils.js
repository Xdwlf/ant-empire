
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
