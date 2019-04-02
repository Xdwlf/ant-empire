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
              description: "A hurricane has been building. The fierce winds reach you and rampage through your area, bringing rain, wind, and terror. Many of your colony is either washed away or blown far from home.",
              id: "h5",
              effects: [{
                type: 'ant',
                subtype: 'worker',
                number: 0.5
              }]
            }, {
              description: "A prolonged drought dries up your water source and you have to rely more on your water stores than usual.",
              id: "h6",
              effects: [{
                type: 'resource',
                subtype: 'water',
                number: -1
              },{
                type: 'store',
                subtype: 'water',
                number: 0.7
              }]
            }],
    animal: [{
            description: 'Alas! An anteater has happened upon your colony. With its sticky tongue, traps many of your workers who end up midday snacks.',
            id: "e1",
            effects: [{type: 'ant',
            subtype: 'worker',
            number: 0.9}]
          }, {
            description: 'While out scouting, some of your ants do not return. The others bring tales of terrifying creatures with sharp fangs and unfillable appetites.',
            id: "e2",
            effects: [{type: 'ant',
            subtype: 'worker',
            number: 0.9}]
          }, {
            description: 'An infection has happened upon your colony. While you are thankfully unaffected, many of your children are not as fortunate. All you can do is dispose of the bodies as they fall one by one to their enternal sleep. Thankfully the bulk of your colony survives.',
            id: "e3",
            effects: [{type: 'ant',
            subtype: 'worker',
            number: 0.8}, {
              type: 'ant',
              subtype: 'pupae',
              number: 0.3
            }, {
              type: 'ant',
              subtype: 'larvae',
              number: 0.3
            }, {
              type: 'ant',
              subtype: 'eggs',
              number: 0.3
            }]
          }, {
            description: 'An antlion has made itself home in your vicinity. Many of your gatherers fall prey to the antlions carefully planned traps.',
            id: "e4",
            effects: [{type: 'ant',
            subtype: 'worker',
            number: 0.8}]
          }, {
            description: 'There has recently been a surge in the local spider population and your children have become fuel for their growth.',
            id: "e5",
            effects: [{type: 'ant',
            subtype: 'worker',
            number: 0.8}]
          }],
    human: [{
          description: 'Find you a nuisance, a group of humans has systematically poured poison on your colony and flooded it. By digging further down into your tunnels, some of you manage to escape but at great cost.',
          id: 'hu1',
          effects: [{type: 'ant',
            subtype: 'larvae',
            number: 0},{
            type: 'ant',
            subtype: 'pupae',
            number: 0
            }, {
            type: 'ant',
            subtype: 'eggs',
            number: 0
            }, {
            type: 'ant',
            subtype: 'worker',
            number: 0.2
          }]
        }, {
          description: 'Cruel pups of the human race have discovered a new way to hurt you. They concentrate the sun through a glass and burn your workers for fun.',
          id: 'hu2',
          effects: [{
            type: 'ant',
            subtype: 'worker',
            number: 0.9
          }]
        }, {
          description: 'Human children kick your home in play and many of the tunnels cave in. Fortunately, you are strong and none of your workers are hurt. Some of your ants retaliate and sting the humans. Hopefully they do not come back for revenge.',
          id: 'hu3',
          effects: [{type: 'risk',
            subtype: 'human',
            number: 1}]
        }, {
          description: 'After accidentally walking through their terrain, humans destroy your scent trails to ward off you workers. All of them make it back, but the humans are now alerted to your presence.',
          id: 'hu4',
          effects: [{type: 'risk',
            subtype: 'human',
            number: 1}]
        }, {
          description: 'A couple of human homes have popped up nearby, leading you to be even closer to human population. The chance of your paths crossing in the future has increased.',
          id: 'hu5',
          effects: [{type: 'risk',
            subtype: 'human',
            number: 1}]
        }, {
          description: 'Several human homes have been abandoned. Human families have moved out and it should be less likely to run into humans in the future.',
          id: 'hu6',
          effects: [{type: 'risk',
            subtype: 'human',
            number: -1}]
        },{
          description: 'The humans have found you a nuisance and waged war! After a great fight, they manage to dig you out of your home. As you look up at the sky one last time, a pair of giant hands descend upon you. Just once instant, and then blackness. You have been killed by humans.',
          id: 'hu7',
          effects:  [{type: 'status',
          status: gStatus.KILLED_BY_HUMANS},]
        }, {
          description: 'The humans have dug up your colony to examine the inner workings of your home. Your workers viciously attempt to fend them off, but they came prepared with gloves. They manage to find you and put you in a small plastic test tube for further experiment. As you are lifted into the sky in their hands, you see the last glimpses of the remains of your colony. You have been captured by humans. ',
          id: 'hu8',
          effects:  [{type: 'status',
          status: gStatus.CAPTURED_BY_HUMANS},]
        }],
    ant: [{
          description: 'A neighboring ant colony wages war against you. You are no match to their overwhelming forces and your home is theirs to plunder. Their workers drag you back to their colony to be an unwilling slave. You will spend the rest of your days birthing eggs for your enemies.',
          id: 'a1',
          effects: [{type: 'status',
          status: gStatus.CAPTURED_BY_ANTS},]
        }, {
          description: 'Another ant colony has bombarded you with attacks. Your warriors fight bravely and manage to fend them off, but many are hurt.',
          id: 'a2',
          effects: [{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'While out looking for more resources, some of your scouts are attacked by other ants. They do not seem to be friendly ants and the chance of conflict increases.',
          id: 'a3',
          effects: [{type: 'risk',
            subtype: 'ant',
            number: 1},{
            type: 'ant',
            subtype: 'worker',
            number: 0.8
          }]
        }, {
          description: 'Your hostile ant neighbors are venturing further into your territory. There have been several skirmishes over the past few days and tension is rising.',
          id: 'a5',
          effects: [{
            type: 'ant',
            subtype: 'worker',
            number: 0.9
          }]
        }, {
          description: 'You have been an eyesore to the ant colonies around you and some have targetted you. When your ants are out gathering food, your stores were raided.',
          id: 'a6',
          effects: [{type: 'store',
            subtype: 'food',
            number: 0.5},{
            type: 'store',
            subtype: 'water',
            number: 0.8
          }]
        }, {
          description: 'One of the ants your area have waged war on you. In the future, attacks will be more common.',
          id: 'a7',
          effects: [{type: 'risk',
            subtype: 'ant',
            number: 1}]
        }, {
          description: 'Unable to keep up with your progress, an ant colony nearby has become afraid of you. They decide to move away. Your risk of being attacked by ants decreases.',
          id: 'a8',
          effects: [{type: 'risk',
            subtype: 'ant',
            number: -1}]
        }]

}
