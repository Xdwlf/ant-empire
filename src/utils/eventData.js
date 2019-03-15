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
