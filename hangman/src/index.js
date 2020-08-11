import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import Gallow from './components/Gallow'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Gallow />
  </React.StrictMode>,
  document.getElementById('root')
);