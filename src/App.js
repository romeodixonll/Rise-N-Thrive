import { Fragment, useContext, useState } from 'react'
import './App.css';
import classes from './App.module.css';

import Pages from './components/Pages/pagesIndex';
import Nav from './components/Nav/NavTabs'

// import ColorContextProvider from './store/color-context';
import { ColorContext } from './store/color-context';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [ , ,theme] = useContext(ColorContext)
  console.log(theme)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  console.log(theme)
  return (
      <main
        // className="flex"
        className={classes.flex}
        style={{ backgroundColor: theme, transition:'300ms' }}>
        <Nav handlePageChange={handlePageChange} currentPage={currentPage} />
        <Pages currentPage={currentPage} />
      </main>
  );
}

export default App;
