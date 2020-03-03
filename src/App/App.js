import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Swapi from '../Swapi/Swapi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Swapi />
      </BrowserRouter>
    </div>
  );
}

export default App;
