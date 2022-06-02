import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/atomic/organisms/Header';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
