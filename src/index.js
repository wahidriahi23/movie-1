import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App' ;
import Description from './Components/Description' ;
import TrailerPage from './Components/TrailerPage' ;
import NoPage from './Components/NoPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<App />}/>
        <Route path='/home' element={<App />}/>
        <Route path='/description/:id' element={<Description />}/>
        <Route path='/description/:id/video' element={<TrailerPage />} />
        <Route path='/description/:id/video/*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();