import React from 'react';
import Enter from '../../containers/Enter'
import Prequel from '../../containers/Prequel'
import Choice from '../../containers/Choice'
import Searching from '../../containers/Searching'
import Gameplay from '../../containers/Gameplay'
import Event from '../../containers/Event'


export default function loadPage(page, callback, callback2, callback3){
  const pages = {
    enter: <Enter key={page} changePage={callback} />,
    prequel: <Prequel key={page} changePage={callback} />,
    choice: <Choice key={page} changePage={callback} />,
    searching: <Searching key={page} changePage={callback} />,
    gameplay: <Gameplay key={page} changePage={callback} setChoice={callback2}/>,
    event: <Event key={page} changePage={callback} resetGame={callback3}/>
    }
  return pages[page]
}
