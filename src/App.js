import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Screen from './components/Screen';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Screen /> } />
          <Route path='/music' element={ <Main /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
