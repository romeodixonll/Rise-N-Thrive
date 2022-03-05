import {Fragment, useState} from 'react'
import './App.css';
import classes from './App.module.css';

import Pages from './components/Pages/pagesIndex';
import Nav from './components/Nav/NavTabs'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <main 
    // className="flex"
    className={classes.flex}
    style={{backgroundColor:'#393939'}}>
      <Nav handlePageChange={handlePageChange} currentPage={currentPage} />
      <Pages currentPage={currentPage}/>
    </main>
  );
}

export default App;
