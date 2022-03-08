import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import ColorContextProvider from './store/color-context';

ReactDOM.render(<BrowserRouter><ColorContextProvider><App /></ColorContextProvider></BrowserRouter>, document.getElementById('root'));
