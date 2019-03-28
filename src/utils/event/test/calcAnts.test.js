import {calcCurrentAnts} from '../calcAnts'
import {defaultState} from './testData'

const defaultChoice = "defend"

describe('calcCurrentAnts when given a reduxState and a choice', ()=>{
  let newAntObject;
  beforeEach(()=>{
    newAntObject = calcCurrentAnts(defaultState, defaultChoice);
  })
  test('returns not undefined', ()=>{
    expect(newAntObject).toBeTruthy()
  })
  test('returns an object with correct keys', ()=>{
    expect(newAntObject.hasOwnProperty('worker')&&
      newAntObject.hasOwnProperty('larvae')&&
      newAntObject.hasOwnProperty('pupae')&&
      newAntObject.hasOwnProperty('eggs')).toBeTruthy()
  })
  test('returns an object with keys with valid values', ()=>{
    expect(newAntObject.worker && newAntObject.larvae && newAntObject.pupae && newAntObject.eggs).toBeTruthy()
  })
})

describe('calcCurrentAnts when not given valid props', ()=>{
  const resetAnts = {
    worker: 0,
    pupae: 0,
    larvae: 0,
    eggs: 0
  }
  test('when reduxState is not defined, reset ants to 0', ()=>{
    const newAntObject = calcCurrentAnts(undefined, defaultChoice)
    expect(newAntObject).toEqual(resetAnts)
  })
  test('when choice is not defined, continue without error', ()=>{
    const newAntObject = calcCurrentAnts(defaultState, undefined);
    expect(newAntObject).toBeTruthy()
  })
})
