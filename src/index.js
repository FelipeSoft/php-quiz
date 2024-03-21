import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Thanks from './pages/Thanks';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className="bg-black">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={<Home />} />
          <Route path='/quiz' Component={<App />} />
          <Route path='/thanks' Component={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
