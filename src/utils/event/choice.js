export const choiceDesc = {
  birth: 'As the queen ant you dedicate most of your time and resources to spawning new eggs. The rest of colony is left to govern the home as usual.',
  expand: 'You command your workers to scout out new territory in search for more sources of food and water.',
  defend: 'To protect your workers, you command your colony to move cautiously and to not range too far from home.'
}

export function describeChoice(choice){
  return choiceDesc[choice]
}
