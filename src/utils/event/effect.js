export function compileEffects(events){
  if(!events) return []
  let effects = events.reduce((accum, curr) => [...accum, ...curr.effects], [])
  return effects
}

export function addUpEffects(effects){
  return effects.reduce((accum, effect)=> accum+effect.number, 0)
}

export function calcEventEffects(event, reduxState){
  if(!event) return [];
  let {ants, store, home, choice} = reduxState
  let effect;
  if(event.type=== 'ant'){
    effect = Math.floor(ants[event.subtype]*event.number) - ants[event.subtype]
  }
  if(event.type=== 'resource'){
    effect = event.number
  }
  if(event.type=== 'store'){
    effect = Math.floor(store[event.subtype] * event.number - store[event.subtype])
  }
  let number = (choice === "defend" && effect<0) ? Math.floor(effect/2): effect
  return {
    type: event.type,
    subtype: event.subtype,
    number
  }
}

export function applyEffectsToStatus(effects, status){
  let types = {};
  let newStatus = {...status}
  const ants = {...status.ants}
  const store = {...status.store}
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
  }
  return newStatus
}
