import {statusEffects} from './effects';

//Takes an array of statuses and returns the effects that should be applied to the game
export function addStatusEffects(status){
    let effects = []
    if(!status) return effects;
    status.map(stat=>{
        let effect = statusEffects[stat];
        if(effect){
            effects = effects.concat(effect)
        }
    })
    return effects;
}

