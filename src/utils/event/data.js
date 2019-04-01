
export const eventsData = {
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
                }, {
                description: 'Blizzard',
                id: "t4",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.9}]
                }, {
                description: 'Sudden drop in temperature',
                id: "t5",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.9}]
                }, {
                description: 'Heat Wave',
                id: "t6",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.9}]
                }, {
                description: 'Small Fire',
                id: "t7",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.9}]
                }, {
                description: 'Wildfire',
                id: "t8",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.9}]
                }, {
                description: 'Heatstroke',
                id: "t9",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.9}]
                }, {
                description: 'Mirage',
                id: "t10",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.9}]
              }],
    humidity: [{
              description: 'During the night, a sudden rainstorm comes pouring down hard. Droplets of water bombard your unprepared colony and some of your workers are caught outside. A part of your colony has been flooded.',
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
                  number: 1.1
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
