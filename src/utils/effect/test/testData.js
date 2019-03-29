export const defaultEvents = [{description: "Event1",
              id: "t1",
              effects: [{type: "ant",
              subtype: 'larvae',
              number: 0.2}]
            }, {description: "Event2",
              id: "t2",
              effects: [{type: "resource",
              subtype: 'food',
              number: 1}]
            }, {description: "Event3",
              id: "t3",
              effects: [{type: "store",
              subtype: 'water',
              number: 0.7}, {
                type: "ant",
                subtype: "eggs",
                number: 0.3
              }]
               }]

export const expectedEffects = [
  {type: "ant",
    subtype: 'larvae',
    number: 0.2},
  {type: "resource",
    subtype: 'food',
    number: 1},
  {type: "store",
    subtype: 'water',
    number: 0.7},
  {type: "ant",
    subtype: "eggs",
    number: 0.3
  }]

export const testEffects = [
  {type: "ant",
    subtype: 'larvae',
    number: 30},
  {type: "resource",
    subtype: 'food',
    number: 80},
  {type: "store",
    subtype: 'water',
    number: -10},
  {type: "ant",
    subtype: "eggs",
    number: 5
  }]
