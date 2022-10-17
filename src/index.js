import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TreatmentPage from './routes/TreatmentPage'
import MissionPage from './routes/MissionPage'
import AboutPage from './routes/AboutPage'
import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/treatment' element={<TreatmentPage />} />
      <Route path='/mission' element={<MissionPage />} />
      <Route path='/about-us' element={<AboutPage />} />
      <Route path='/insurance' element={<InsurancePage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

