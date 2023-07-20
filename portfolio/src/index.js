import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './Components/Nav'
import About from './Components/About'
import Contacts from './Components/Contacts';
import Education from './Components/Education';
import Experince from './Components/Experince';
import Projec from './Components/Projec';
import Skills from './Components/Skills';
import Footer from './Components/Footer';


import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <About/>
    <Experince/>
    <Skills/>
    <Projec/>
    <Education/>
    <Contacts/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
