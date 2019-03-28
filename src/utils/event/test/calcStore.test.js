import {calcNewStore} from '../calcStore'
import {defaultState} from './testData'



describe('calcStore function', ()=>{
  let newStore
  beforeEach(()=>{
    newStore = calcNewStore(defaultState)
  })
  test('must return an object', ()=>{
    expect(typeof newStore).toBe('object')
  })
  test('has keys that must have numeric values', ()=>{
    for(let key in newStore){
      expect(typeof newStore[key]).toBe('number')
    }
  })
  test('returns values of keys over 0', ()=>{
    for(let key in newStore){
      expect(newStore[key]).toBeGreaterThan(0)
    }
  })
  
})
