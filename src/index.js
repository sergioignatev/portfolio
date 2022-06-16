import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const paris='https://sergioignatev.github.io/paris/#/';
const infanta="https://sergioignatev.github.io/gittwo/";
const argentina="https://en.wikipedia.org/wiki/Argentina "
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="center">Portfolio website</h1>
    <div id="main">
    <App href={paris} head={"Cold history"} src={paris}/>
    <App href={infanta} head="Infanta" src={infanta}/>
    <App href={argentina} head="Argentina" src={argentina}/>
    
    </div>
  
   
  </React.StrictMode>
);


reportWebVitals();
