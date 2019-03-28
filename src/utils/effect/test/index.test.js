import {compileEffects, addUpEffects, calcEventEffects,applyEffectsToStatus} from '../index'
import {defaultState, controlState} from '../../event/test/testData'
import {defaultEvents, expectedEffects} from './testData'

describe('compileEffects function', ()=>{
  let effects;
  beforeEach(()=>{
    effects = compileEffects(defaultEvents)
  })
  test('if not given an events array, return an empty array', ()=>{
    effects = compileEffects(undefined)
    expect(effects).toEqual([])
  })
  test('returns an array of effect objects', ()=>{
    expect(Array.isArray(effects)).toBe(true)
  })
  test('returns an array of objects with correct type of keys', ()=>{
    expect(effects).toEqual(expectedEffects)
  })
})

describe('addUpEffects function', ()=>{
  test('if not given an effects array, returns 0', ()=>{

  })
  test('returns a number', ()=>{

  })
})

describe('calcEventEffects function', ()=>{
  test('if not given an event array, returns an empty array', ()=>{

  })
  test('returns an object with correct keys', ()=>{

  })
  test('returns an object with keys of correct types', ()=>{

  })

})

describe('applyEffectsToStatus function', ()=>{
  test('does not mutate input', ()=>{

  })
  test('returns a new status object with all keys', ()=>{

  })
})
