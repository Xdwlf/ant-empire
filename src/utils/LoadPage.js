import React, { Component } from 'react';
import Enter from '../containers/Enter'
import Prequel from '../containers/Prequel'
import Choice from '../containers/Choice'
import Searching from '../containers/Searching'
import Gameplay from '../containers/Gameplay'
import Event from '../containers/Event'


export default function loadPage(page, callback, callback2, callback3){
  const pages = {
    enter: <Enter changePage={callback} />,
    prequel: <Prequel changePage={callback} />,
    choice: <Choice changePage={callback} />,
    searching: <Searching changePage={callback} />,
    gameplay: <Gameplay changePage={callback} setChoice={callback2}/>,
    event: <Event changePage={callback} resetGame={callback3}/>
    }
  return pages[page]
}
