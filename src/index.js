import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './Routes/Home/App';
import Cv from './Routes/Cv/Cv'
import Proyects from './Routes/Proyects/Proyects';
import Contact from './Routes/Contact/Contact'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/cv" element={<Cv/>}></Route>
      <Route path="/proyects" element={<Proyects/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


