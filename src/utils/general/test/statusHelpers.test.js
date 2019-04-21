import {addStatusEffects} from '../statusHelpers'
import {statusEffects} from '../effects'


describe('addStatusEffects function', ()=>{
    const testStatus = ['STARVING', 'DEHYDRATED']
    test('when no status is given returns an empty array', ()=>{
        const effect = addStatusEffects(null);
        expect(effect).toEqual([])
    })
    test('when an empty array is given, returns an empty array', ()=>{
        const effect = addStatusEffects([]);
        expect(effect).toEqual([])
    })
    test('when non-applicable effects are given, return an empty array', ()=>{
        const effect = addStatusEffects(['HUNGRY'])
        expect(effect).toEqual([])
    })
    test('when applicable statuses are given, return an array', ()=>{
        const effect = addStatusEffects(testStatus)
        expect(effect.length).not.toBe(0)
    })
    test('when applicable statuses are given, return an array of effects with proper keys', ()=>{
        const effects = addStatusEffects(testStatus)
        effects.map(effect=>{
            expect(effect.hasOwnProperty('subtype')).toBeTruthy()
        })
    })
})