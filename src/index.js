import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './routers/Router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './styles/Style.css'

ReactDOM.render(
  <React.StrictMode>
   <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);


