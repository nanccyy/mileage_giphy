import React, { useState } from 'react';
import './App.css';
import './_reset.scss';
import Header from './components/Header/Header/Header';
import Banner from './components/Header/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
