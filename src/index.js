import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border0-box;
  font-family: sans-serif;
  font-size: clamp(13px, calc(20 * (100vw / 740)), 19px);
}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);

