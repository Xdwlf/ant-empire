import {gStatus} from '../general/status'

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
                description: 'Snow swirls around you and there is no visibility. Your entire colony is covered and many of your ants do not survive the night.',
                id: "t4",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.7}, {type: 'ant',
                subtype: 'larvae',
                number: 0.6}, {type: 'ant',
                subtype: 'pupae',
                number: 0.5}, {type: 'ant',
                subtype: 'egg',
                number: 0.3}]
                }, {
                description: 'A sudden drop in temperature causes the ground to freeze. Unable to regulate temperature, your young are affected.',
                id: "t5",
                effects: [{type: 'ant',
                subtype: 'pupae',
                number: 0.3}, {type: 'ant',
                subtype: 'larvae',
                number: 0.2}, {type: 'ant',
                subtype: 'egg',
                number: 0.1}]
                }, {
                description: 'A heat wave passes over the area, causing foliage to shrivel and to dry up. Food becomes scarce and in order to stay healthy, your ants use up more water stores than usual.',
                id: "t6",
                effects: [{type: 'store',
                subtype: 'food',
                number: 0.9}, {
                  type: "store",
                  subtype: 'water',
                  number: 0.6
                }, {
                  type: 'resource',
                  subtype: 'food',
                  number: -1
                }, {
                  type: 'resource',
                  subtype: 'water',
                  number: -1
                }]
                }, {
                description: 'Due to the heat, a small fire starts up and burns through the area. Many of the animals flee, and you retreat underground to escape the blazing heat. When you emerge, you count your workers and have suffered minimal amount of damage.',
                id: "t7",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.9}]
                }, {
                description: 'A blazing wildfire arises out of the night and spreads through the area faster than a butterfly can flap its wings. It takes you by surprise. While retreating back into your colony to avoid the searing hot temperatures, many of your workers are unable to survive.',
                id: "t8",
                effects: [{type: 'ant',
                subtype: 'worker',
                number: 0.3}]
                }, {
                description: "The prolonged heat makes some of your workers woozy. Their productivity is decreased and you're forced to rely on your stores for upkeep",
                id: "t9",
                effects: [{type: 'store',
                subtype: 'food',
                number: 0.9}, {
                  type: 'store',
                  subtype: 'water',
                  number: 0.8
                }]
                }, {
                description: "The abnormally sunny weather lifts your spirits and warms the ground! Your workers are much more productive and bring back more food and water to show it.",
                id: "t10",
                effects: [{type: 'store',
                subtype: 'food',
                number: 1.1}, {
                  type: 'store',
                  subtype: 'water',
                  number: 1.1
                }]
              }, {
                description: "The weather cools down and for once you get a break from the ever enduring heat. Because of your good spirits, your egg laying becomes more productive!",
                id: "t11",
                effects: [{
                  type: 'ant',
                  subtype: 'eggs',
                  number: 1.5
                }]
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
              description: "Lightning has struck nearby! Due to the dry weather, the foliage around you has been exceptionally flammable. A small fire spreads quickly and scorches the area.",
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
            },{
              description: "A heavy rainstorm and flash flood covers the area with several feet of rain. Your entire colony has been flooded and your workers scamper together to form a raft. With your guidance, your workers all survive, but many of your young ones are drowned.",
              id: "h3",
              effects: [{
                type: 'ant',
                subtype: 'larvae',
                number: 0.1
              },{
                type: 'ant',
                subtype: 'pupae',
                number: 0.2
              }, {
                type: 'ant',
                subtype: 'eggs',
                number: 0.1
              }]
            }, {
              description: "A gentle misty rain comes through and softens the parched ground. Your ants scamper to collect the beads of water before they succumb to the dry winds.",
              id: "h4",
              effects: [{
                type: 'store',
                subtype: 'water',
                number: 1.1
              }]
            }, {
              description: "Hurricane",
              id: "h5",
              effects: [{
                type: 'store',
                subtype: 'food',
                number: 0.8
              },{
                type: 'store',
                subtype: 'water',
                number: 0.7
              }]
            }, {
              description: "Drought",
              id: "h6",
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
          }, {
            description: 'Scouts picked off',
            id: "e2",
            effects: [{type: 'ant',
            subtype: 'worker',
            number: 0.8}]
          }, {
            description: 'Fungus',
            id: "e3",
            effects: [{type: 'ant',
            subtype: 'worker',
            number: 0.8}]
          }, {
            description: 'Wasp',
            id: "e4",
            effects: [{type: 'ant',
            subtype: 'worker',
            number: 0.8}]
          }, {
            description: 'Parasite',
            id: "e5",
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
        }, {
          description: 'Magnifying lens',
          id: 'hu2',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Kick anthill',
          id: 'hu3',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Destroy scent trails',
          id: 'hu4',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Move in',
          id: 'hu5',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Move out',
          id: 'hu6',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        },{
          description: 'Kill Queen',
          id: 'hu7',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Captured',
          id: 'hu8',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }],
    ant: [{
          description: 'Captured by ants',
          id: 'a1',
          effects: [{type: 'status',
          status: gStatus.CAPTURED_BY_ANTS},]
        }, {
          description: 'Ants attack',
          id: 'a2',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Scouts killed',
          id: 'a3',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Colony Raided of stores',
          id: 'a4',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Skirmish',
          id: 'a5',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Assasinated by ant',
          id: 'a6',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Ants wage war on you',
          id: 'a7',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Ants move away',
          id: 'a8',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0.5},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }]

}
