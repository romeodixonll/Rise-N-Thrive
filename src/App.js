import { useContext, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';
import classes from './App.module.css';

import Nav from './components/Nav/NavTabs'
import Home from './pages/Home';
import Algorithm from './pages/Algorithm';
import Game from './pages/Game';
import Stocks from './pages/Stocks';
import Settings from './pages/Settings';


// import ColorContextProvider from './store/color-context';
import { ColorContext } from './store/color-context';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [, , theme] = useContext(ColorContext)
  console.log(theme)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  console.log(theme)
  return (
    <main
    className={classes.flex}
      style={{ backgroundColor: theme, transition: '300ms' }}>
      <Nav handlePageChange={handlePageChange} currentPage={currentPage} />
      <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={1000}
          classNames="slideUp">
          <Switch location={location}>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/algorithm">
              <Algorithm />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/stocks">
              <Stocks />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      )} />
    </main>
  );
}

export default App;
