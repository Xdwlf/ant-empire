export const descriptions = {
  temperature: [{
    desc: 'frozen',
    story: "The ground is frozen solid and difficult to burrow into. Cold days and nights below freezing are probably the norm here. ",
    risk: 10,
    resource: 3},{
    desc: 'cold',
    story: "A fresh snowfall has blanketed the area with a layer of white and it shows no signs of melting. The temperature here is probably cold year round. ",
    risk: 8,
    resource: 4},{
    desc: 'chilly',
    story: "Traces of melted snow are scattered throughout the area and you can still see white on the mountain peaks in the distance. The wind never really stops and it's a bit chilly. ",
    risk: 5,
    resource: 5},{
    desc: 'mild',
    story: "It's a pleasant day and the sun shines down warming the area gently. Temperate weather seems to be the norm here. ",
    risk: 2,
    resource: 5},{
    desc: 'warm',
    story: "It feels like summer is on the horizon here. Everything feels a bit stuffy, but it's not uncomfortable if you get used to it. ",
    risk: 3,
    resource: 6},{
    story: "The sun never seems to let up here. Heat seems to radiate off of the ground, the rocks, and even the foliage. ",
    desc: 'hot',
    risk: 5,
    resource: 6}, {
    story: "It is so bloody hot that you feel like you're being roasted alive. The ground is SEARING and your little feet feel like they're burning. ",
    desc: 'searing',
    risk: 8,
    resource: 3
  }],
  humidity: [{
    desc: 'very wet',
    story: 'With every step you take, water seems to ooze out of the ground. Everything is soaked and beads of water shimmer. Heavy rain and floods are definitely common here. ',
    risk: 8,
    resource:6}, {
    desc: 'wet',
    story: "It's very lush and there is so much water vapor in the air that you never feel dry. There always seems to be a light rainstorm on the horizon. ",
    risk: 5,
    resource: 5},{
    story: "There doesn't seem to be much humidity in the air and everything looks dry. It probably doesn't rain much around here and storms are brief. ",
    desc: 'dry',
    risk: 7,
    resource: 4}, {
    story: "As soon as you arrive, you feel the water being sucked out of you. You can barely find any traces of water around and don't see signs of it raining anytime soon. ",
    desc: 'very dry',
    risk: 10,
    resource:3}],
  environment: [{
      desc:'in a forest',
      story: "Tall trees tower over you and the canopy blankets out half of the sky. "
    },{
      desc: 'in the mountains',
      story: "All around are gigantic mountains that make you feel like an ant and rightfully so. "
    },{
      desc: 'by a meadow',
      story: "Golden grass rises out of the ground. There is no end to this sea of yellow as far as the eyes can see. "
    },{
      desc: 'in a clearing',
      story: "There is foliage nearby, but you are in a small clearing. The grass is short and rays of light shine patches of gold around you. "
    },{
      desc: 'on the side of a hill',
      story: "Following a gentle slope, it seems to be the side of a hill. Foliage rises up occasionally here or there and you are surrounded by other hills of similar nature. "
    }],
  home: [{
    desc: 'mound',
    story: "A mound seems to provide shelter from danger and the elements and may be a good home. "
    }, {
      desc: 'crack',
      story: "There is a long narrow crack in the ground and nothing seems to be inside. This may be a good place to start a colony. "
    }, {
      desc: 'abandoned ant colony',
      story: "From the distance it seems like a small mound, but as you move closer it's obvious that this used to be an ant colony. The tunnels are all empty and the scent of ants is long gone. This may be a good home. "
    }, {
      desc: 'hole',
      story: "To your side there is a deep hole in the ground that was dug by an animal of some sort. There is no resident right now and may be a good home. "
    }],
  human: [{
    story: 'There is a human city located nearby. The human stench makes you uneasy and cautious. ',
    risk: 10}, {
    story: 'This area is located on the outskirts of human civilization. While you are not surrounded by humans, it could still be dangerous. ',
    risk: 8},{
    story: 'Human trails can be seen here, and there are few dwellings in direct line of sight. Human larvae may trod through here on their quest to grow into more dangerous humans. ',
    risk: 6},{
    story: "The scent of humans is faint, but still regular. However, in this day and age it's difficult to be completely free of these nuisances. ",
    risk: 4},{
    story: "You can tell that humans rarely gather or dwell near here. While there may be the occasional family outing or adventurer, it doesn't seem too likely. ",
    risk: 2}],
  ant: [{
    story:"It is packed with ant colonies. All around, you can see little mounds poking out of the ground and workers shuffling to and from their homes. ",
    risk:10
  }, {
    story: "There are quite a few colonies around you. The immediate space is empty, but scent trails criss cross all over the area. ",
    risk: 8
  }, {
    story: "Ant neighbors are common here and seem to pass through the area sometimes. There seem to be no clear boundary. ",
    risk: 6
  }, {
    story: "There are a few ant colonies around, but there is a quite a distance separating you and them. ",
    risk: 4
  }, {
    story: "Ants don't seem to have populated this area and you barely have any ant neighbors. ",
    risk: 2
  }],
  animal: [{
    story: "Predators are everywhere and moving safely in the daytime may be difficult. ",
    risk:10
  }, {
    story: "Ant-eating animals are abound and seem to pass through here often. ",
    risk: 8
  }, {
    story: "A diverse arrangement of life is here and some of them may find ants to be a tasty snack. ",
    risk: 6
  }, {
    story: "A few animal trails are around, but you don't see them today. ",
    risk: 4
  }, {
    story: "Barely any wildlife here seems to be of the ant-eating type. Hopefully this means there won't be much predation. ",
    risk: 2
  }]
}
