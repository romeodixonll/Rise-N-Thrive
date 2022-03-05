import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ColorContextProvider from './store/color-context';

ReactDOM.render(<ColorContextProvider><App /></ColorContextProvider>, document.getElementById('root'));
