export const choiceData = {
  birth: [{description: "You've manages to birth quite a few eggs! Hopefully they will quickly grow up into strong workers and provide for the colony.",
          effects: [{type: "ant",
          subtype: 'eggs',
          number: 1.5}]
           }, {description: "To give birth to your eggs, you consume more resources than usual. However, you still don't manage to lay more eggs.",
          id: "t1",
          effects: [{type: "store",
          subtype: 'food',
          number: 0.9}]
           }],
  expand: [{description: "Your ants brave the unknown and scout for sources of food and water. They search far and wide into unknown territories and are able to bring news of a undiscovered pond nearby! Now access to water will be even easier.",
          effects: [{type: "resource",
          subtype: 'water',
          number: 1}, {type: "store",
          subtype: 'water',
          number: 1.1}]
        }, {description: "While out searching, your colony finds a freshly killed mammal! This will be able to feed your colony for quite a while.",
           effects: [{type: "store",
           subtype: 'food',
           number: 1.2}]
         }, {description: "In their search for food, your scouts wander further than the boundaries of your territory. All the scouts are surrounded by hostile enemy ants and brutually killed. Not one makes it back alive.",
          id: "t1",
          effects: [{type: "ant",
          subtype: 'worker',
          number: 0.7}]
        }, {description: "Your workers come back from their trip empty-handed.",
          effects: []
        }, {description: "Your workers come back from their trip empty-handed.",
          effects: []
        }, {description: "Your workers come back from their trip empty-handed.",
          effects: []
           }],
  defend: [{description: "",
    effects: []
     }]
}
