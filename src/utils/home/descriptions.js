import React from 'react'
export const descriptions = {
  temperature: [{
    desc: 'frozen',
    story: <span> The ground is <span className='texteffect freezing'>frozen solid</span> and difficult to burrow into. <span className='texteffect freezing'>Cold days and nights below freezing </span>are probably the norm here. </span>,
    risk: 10,
    resource: 3},{
    desc: 'cold',
    story: <span> <span className='texteffect snow'>A fresh snowfall has blanketed the area with a layer of white and it shows no signs of melting.</span> The temperature here is probably cold year round. </span>,
    risk: 8,
    resource: 4},{
    desc: 'chilly',
    story: <span> <span className='texteffect snow'>Traces of melted snow are scattered throughout the area and you can still see white on the mountain peaks in the distance.</span> The wind never really stops and it's a bit chilly. </span>,
    risk: 5,
    resource: 5},{
    desc: 'mild',
    story: <span>It's a pleasant day and <span className='texteffect warm'>the sun shines down warming the area gently.</span> Temperate weather seems to be the norm here. </span>,
    risk: 2,
    resource: 5},{
    desc: 'warm',
    story: <span>It feels like <span className='texteffect warm'>summer is on the horizon </span> here. Everything feels a bit stuffy, but it's not uncomfortable if you get used to it.</span>,
    risk: 3,
    resource: 6},{
    story: <span>The sun never seems to let up here. <span className='texteffect hot'>Heat seems to radiate off of the ground, the rocks, and even the foliage.</span> </span>,
    desc: 'hot',
    risk: 5,
    resource: 6}, {
    story: <span className='texteffect hot'>It is so bloody hot that you feel like you're being roasted alive. The ground is SEARING and your little feet feel like they're burning. </span>,
    desc: 'searing',
    risk: 8,
    resource: 3
  }],
  humidity: [{
    desc: 'very wet',
    story: <span>With every step you take, water seems to ooze out of the ground. <span className='texteffect soaked'>Everything is soaked and beads of water shimmer.</span> Heavy rain and floods are definitely common here. </span>,
    risk: 8,
    resource:6}, {
    desc: 'wet',
    story: <span><span className='texteffect lush'>It's very lush here </span>and there is so much water vapor in the air that you never feel dry. There always seems to be a light rainstorm on the horizon. </span>,
    risk: 5,
    resource: 5},{
    story: <span>There doesn't seem to be much humidity in the air and <span className='texteffect dry'>everything looks dry.</span> It probably doesn't rain much around here and storms are brief. </span>,
    desc: 'dry',
    risk: 7,
    resource: 4}, {
    story: <span><span className='texteffect dry'>The air is extremely parched and as soon as you arrive, you feel the water being sucked out of you.</span> You can barely find any traces of water around and don't see signs of it raining anytime soon. </span>,
    desc: 'very dry',
    risk: 10,
    resource:3}],
  environment: [{
      desc:'in a forest',
      story: <span className='texteffect forest'>Tall trees tower over you and the canopy blankets out half of the sky. </span>
    },{
      desc: 'in the mountains',
      story: <span>All around are <span className='texteffect mountain'>gigantic mountains</span> that make you feel like an ant and rightfully so. </span>
    },{
      desc: 'by a meadow',
      story: <span className='texteffect meadow'>Golden grass rises out of the ground. There is no end to this sea of yellow as far as the eyes can see. </span>
    },{
      desc: 'in a clearing',
      story: <span>There is foliage nearby, but you are in a small clearing. The grass is short and <span className='texteffect gold'>rays of light shine patches of gold</span> around you. </span>
    },{
      desc: 'on the side of a hill',
      story: <span>Following a gentle slope, it seems to be the side of a hill. Foliage rises up occasionally here or there and you are surrounded by other hills of similar nature. </span>
    }],
  home: [{
    desc: 'mound',
    story: <span>A mound seems to provide shelter from danger and the elements and may be a good home. </span>
    }, {
      desc: 'crack',
      story: <span>There is a long narrow crack in the ground and nothing seems to be inside. This may be a good place to start a colony. </span>
    }, {
      desc: 'abandoned ant colony',
      story: <span>From the distance it seems like a small mound, but as you move closer it's obvious that this used to be an ant colony. The tunnels are all empty and the scent of ants is long gone. This may be a good home. </span>
    }, {
      desc: 'hole',
      story: <span>To your side there is a deep hole in the ground that was dug by an animal of some sort. There is no resident right now and may be a good home. </span>
    }],
  human: [{
    story: <span className='texteffect danger'>There is a human city located nearby. The human stench makes you uneasy and cautious. </span>,
    risk: 10}, {
    story: <span className='texteffect caution'>This area is located on the outskirts of human civilization. While you are not surrounded by humans, it could still be dangerous. </span>,
    risk: 8},{
    story: <span className='texteffect warning'>Human trails can be seen here, and there are few dwellings in direct line of sight. Human larvae may trod through here on their quest to grow into more dangerous humans. </span>,
    risk: 6},{
    story: <span className='texteffect okay'>The scent of humans is faint, but still regular. However, in this day and age it's difficult to be completely free of these nuisances. </span>,
    risk: 4},{
    story: <span className='texteffect good'>You can tell that humans rarely gather or dwell near here. While there may be the occasional family outing or adventurer, it doesn't seem too likely. </span>,
    risk: 2}],
  ant: [{
    story:<span className='texteffect danger'>It is packed with ant colonies. All around, you can see little mounds poking out of the ground and workers shuffling to and from their homes. </span>,
    risk:10
  }, {
    story: <span className='texteffect caution'>There are quite a few colonies around you. The immediate space is empty, but scent trails criss cross all over the area. </span>,
    risk: 8
  }, {
    story: <span className='texteffect warning'>Ant neighbors are common here and seem to pass through the area sometimes. There seem to be no clear boundary. </span>,
    risk: 6
  }, {
    story: <span className='texteffect okay'>There are a few ant colonies around, but there is a quite a distance separating you and them. </span>,
    risk: 4
  }, {
    story: <span className='texteffect good'>Ants don't seem to have populated this area and you barely have any ant neighbors. </span>,
    risk: 2
  }],
  animal: [{
    story: <span className='texteffect danger'>Predators are everywhere and moving safely in the daytime may be difficult. </span>,
    risk:10
  }, {
    story: <span className='texteffect caution'>Ant-eating animals are abound and seem to pass through here often. </span>,
    risk: 8
  }, {
    story: <span className='texteffect warning'>A diverse arrangement of life is here and some of them may find ants to be a tasty snack. </span>,
    risk: 6
  }, {
    story: <span className='texteffect okay'>A few animal trails are around, but you don't see them today. </span>,
    risk: 4
  }, {
    story: <span className='texteffect good'>Barely any wildlife here seems to be of the ant-eating type. Hopefully this means there won't be much predation. </span>,
    risk: 2
  }]
}
