import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import BotonAgregar from './components/BotonAgregar'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BotonAgregar />
  </React.StrictMode>,
  document.getElementById('root')
);