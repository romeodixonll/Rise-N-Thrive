
import Home from './home/Home';
import Algorithm from './algorithm/Algorithm';
import Game from './game/Game';
import Stocks from './stocks/Stocks';
import Settings from './settings/Settings';
import { useEffect } from 'react';

const Pages = ({ currentPage }) => {
  // console.log(currentPage)
  const renderPage = (currentPage) => {
  console.log('test', currentPage)

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



return <div>
  {renderPage(currentPage)}
</div>
}

export default Pages