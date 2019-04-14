import {compileEffects, addUpEffects, calcEventEffects,applyEffectsToStatus} from '../index'
import {defaultState, controlState} from '../../event/test/testData'
import {defaultEvents, expectedEffects, testEffects, riskEffects} from './testData'

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
  const sampleEffects = [
    {type: "ant",
      subtype: 'larvae',
      number: 20},
    {type: "ant",
      subtype: 'larvae',
      number: -5},
    {type: "ant",
      subtype: 'larvae',
      number: 15},
    {type: "ant",
      subtype: 'larvae',
      number: -40
    }]
  test('if not given an effects array, returns 0', ()=>{
    const effect = addUpEffects()
    expect(effect).toBe(0)
  })
  test('returns a number', ()=>{
    const effect = addUpEffects(sampleEffects)
    expect(effect).toBe(-10)
  })
})

describe('calcEventEffects function', ()=>{
  const keys = ["type", "subtype", "number"]
  const effect = {
    type: "resource",
      subtype: 'food',
      number: 1.1
  }
  test('if not given an event array, returns an empty object', ()=>{
    const calcEffect = calcEventEffects()
    expect(calcEffect).toEqual({})
  })
  test('returns an object with correct keys', ()=>{
    const calcEffect = calcEventEffects(effect, defaultState)
    keys.map((key)=>{
      expect(calcEffect.hasOwnProperty(key)).toBeTruthy()
    })
  })
  test('returns an object with keys of correct types', ()=>{
    const calcEffect = calcEventEffects(effect, defaultState)
    expect(typeof calcEffect[keys[0]]).toBe("string")
    expect(typeof calcEffect[keys[1]]).toBe("string")
    expect(typeof calcEffect[keys[2]]).toBe("number")
  })

})

describe('applyEffectsToStatus function', ()=>{
  const keys = ["ants", "event", "choice", "game", "home", "status", "store"]
  test('returns a new state object', ()=>{
    const status = applyEffectsToStatus(testEffects, defaultState)
    expect(typeof status).toBe("object")
  })
  test('returned object contains all keys', ()=>{
    const status = applyEffectsToStatus(testEffects, defaultState)
    keys.map(key=>{
      expect(status[key]).toBeTruthy()
    })
  })
  test('the returned object is not equal to the input object', ()=>{
    const status = applyEffectsToStatus(testEffects, defaultState)
    expect(status).not.toEqual(defaultState)
  })
  test('risk changes depending on effects', ()=>{
    const status = applyEffectsToStatus(riskEffects, defaultState)
    expect(status.home.risk.human).toBe(7)
  })

})
