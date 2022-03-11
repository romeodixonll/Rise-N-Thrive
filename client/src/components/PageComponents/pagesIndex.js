
import {useState} from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import Home from './home/Home';
import Algorithm from '../../pages/Algorithm';
import Game from '../../pages/Game';
import Stocks from '../../pages/Stocks';
import Settings from './settings/Settings';

let animationTiming = {
  enter:400,
  exit:400,
}

const Pages = ({ currentPage }) => {
  const [displayPage, setDisplayPage] = useState(true)

  const renderPage = (currentPage) => {
    if (currentPage === 'Home') {
      return <Home />;
    };
    if (currentPage === 'Algorithm') {
      return <Algorithm />;
    };
    if (currentPage === 'Game') {
      return <Game />;
    };
    if (currentPage === 'Stocks') {
      return <Stocks />;
    };
    if (currentPage === 'Settings') {
      return <Settings />;
    };
  };

  return <div style={{ flexGrow: '1' }}>
      {renderPage(currentPage)}
  </div>
}

export default Pages