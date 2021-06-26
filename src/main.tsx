import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import age from '@/mock';

console.log('age', age);

console.log(import.meta.env.TEST_ENV);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
