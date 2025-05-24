import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";
import ExchangeProvider from './contexts/ExchangerateContext'
import Home from './components/Home';
import './App.css'

function App() {
 

  return (
    <>
      <React.Fragment>
         <ExchangeProvider>
           <Router>
              <Routes>
                <Route path="/" element={<Home/>} />
              </Routes>
           </Router>
         </ExchangeProvider>
      </React.Fragment>
    </>
  )
}

export default App
