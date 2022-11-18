import React from 'react';
import './App.css';
import Home from './pages/home';
import  {GlobalStyle}  from './styles/global';

function App() {
  return (
    <div className="App">
      <Home/>
      <GlobalStyle/>

    </div>
  );
}

export default App;
