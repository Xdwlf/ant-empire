export const categories = {
  temperature: {
    frozen: ["t1", "t2", "t3"],
    cold: ["t1", "t2", "t3"],
    chilly: ["t1", "t2", "t3"],
    mild: ["t1", "t2", "t3"],
    warm: ["t1", "t2", "t3"],
    hot: ["t1", "t2", "t3"],
    searing: ["t1", "t2", "t3"]
  },
  humidity: {
    'very wet': ["h1"],
    wet: ['h1'],
    dry: ['h1', 'h2'],
    'very dry': ['h1', 'h2']
  },
  animal: ['e1'],
  human: ['hu1'],
  ant: ['a1']

}

export const events = {
  temperature: [{description: "A freak snowstorm blows through. Many of your ants are caught while out gathering food and freeze to death",
                id: "t1",
                effects: [{type: "ant",
                subtype: 'worker',
                number: 0.7}]
                 }, {
                description: 'The snow piles up and moving around becomes harder for your workers. You end up having to rely on your stores for while.',
                id: "t2",
                effects: [{type: 'resource',
                subtype: 'food',
                number: -1}]
                },{
                description: 'A sudden hailstorm batters your colony. You lose some of your workers.',
                id: "t3",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.9}]
              }],
    humidity: [{
              description: 'Flood',
              id: "h1",
              effects: [{type: 'ant',
                  subtype: 'worker',
                  number: 0.8},{
                  type: 'ant',
                  subtype: 'pupae',
                  number: 0.8
                }, {
                  type: 'resource',
                  subtype: 'water',
                  number: 1
                }, {
                  type: "store",
                  subtype: 'water',
                  number: 1.3
                }]
            },{
              description: "Fire",
              id: "h2",
              effects: [{
                type: 'store',
                subtype: 'food',
                number: 0.8
              },{
                type: 'store',
                subtype: 'water',
                number: 0.7
              }]
            }],
    animal: [{
            description: 'Anteater',
            id: "e1",
            effects: [{type: 'ant',
            subtype: 'worker',
            number: 0.8}]
          }],
    human: [{
          description: 'Human pours poison on colony',
          id: 'hu1',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }],
    ant: [{
          description: 'Ant colony attacks',
          id: 'a1',
          effects: [{type: 'ant',
          subtype: 'worker',
          number: 0.6}]
    }]

}
