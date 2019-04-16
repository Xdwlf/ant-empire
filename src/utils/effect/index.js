/**
 * Takes an array of events and flattens it to an array of effects
 * @param {array of Objects} events - An array of events
 */

export function compileEffects(events){
  if(!events) return []
  let effects = events.reduce((accum, curr) => [...accum, ...curr.effects], [])
  return effects
}

export function addUpEffects(effects){
  if(!effects) return 0
  return effects.reduce((accum, effect)=> accum+effect.number, 0)
}

export function calcEventEffects(event, reduxState){
  if(!event) return {};
  let {ants, store, choice} = reduxState
  let effect, status;
  if(event.type=== 'ant'){
    effect = Math.floor(ants[event.subtype]*event.number) - ants[event.subtype]
    effect = (event.number>1 && effect<5)? 5: effect;
  }
  if(event.type=== 'resource'){
    effect = event.number
  }
  if(event.type=== 'store'){
    effect = Math.floor(store[event.subtype] * event.number - store[event.subtype])
    effect = (event.number>1 && effect<10)? 25: effect;
  }
  if(event.type==='status'){
    status = event.status
  }
  if(event.type==='risk'){
    effect = event.number
  }
  let number = (choice === "defend" && effect<0) ? Math.floor(effect/4): effect
  return {
    type: event.type,
    subtype: event.subtype,
    status,
    number
  }
}

export function applyEffectsToStatus(effects, status){
  let types = {};
  let newStatus = {...status}
  effects.map(effect=> (types.hasOwnProperty(effect.type))?
    types[effect.type].push(effect): types[effect.type] = [effect])
  for(let key in types){
    if(key === 'ant'){
      types[key].map(effect=>{
        newStatus.ants = Object.assign({}, newStatus.ants, {[effect.subtype]: Math.max(0, newStatus.ants[effect.subtype] + effect.number)})}
      )
    }
    if(key === 'store'){
      types[key].map(effect=> {
        newStatus.store = Object.assign({}, newStatus.store, {[effect.subtype]: Math.max(0, newStatus.store[effect.subtype] + effect.number) })
      })
    }
    if(key === 'resource'){
      newStatus.home = {...status.home}
      types[key].map(effect=>{
        const resources = {...newStatus.home.resources}
        newStatus.home.resources = Object.assign({}, resources, {[effect.subtype]: Math.min(10, Math.max(1, resources[effect.subtype]+ effect.number))})
      } )
    }
    if(key=== 'status'){
        types[key].map(effect=>{
        newStatus.status = [...newStatus, effect.status]
      })
    }
    if(key=== 'risk'){
      newStatus.home = {...status.home}
      types[key].map(effect=>{
        const risk = {...newStatus.home.risk}
        newStatus.home.risk = Object.assign({}, risk, {[effect.subtype]: Math.min(10, Math.max(1, risk[effect.subtype] + effect.number))})
      })
    }
  }
  return newStatus
}
