import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);