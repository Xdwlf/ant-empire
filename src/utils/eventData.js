export const events = {
  temperature: [{description: "A freak snowstorm blows through. Many of your ants are caught while out gathering food and freeze to death",
                id: "t1",
                type: "ant",
                subtype: 'worker',
                effect: 0.7 }, {
                description: 'The snow piles up and moving around becomes harder for your workers. You end up having to rely on your stores for while.',
                id: "t2",
                type: 'resource',
                subtype: 'food',
                effect: 0.8
                },{
                description: 'A sudden hailstorm batters your colony. You lose some of your workers.',
                id: "t3",
                type: 'ant',
                subtype: 'worker',
                effect: 0.9
              }],
    humidity: [{
              description: 'Flood',
              id: "h1",
              type: 'ant',
              subtype: 'worker',
              effect: 0.8
            }],
    animal: [{
            description: 'Anteater',
            id: "e1",
            type: 'ant',
            subtype: 'worker',
            effect: 0.8
          }],
    human: [{
          description: 'Human pours poison on colony',
          id: 'hu1',
          type: 'ant',
          subtype: 'larvae',
          effect: 0.5
        }],
    ant: [{
          description: 'Ant colony attacks',
          id: 'a1',
          type: 'ant',
          subtype: 'worker',
          effect: 0.6
    }]

}
