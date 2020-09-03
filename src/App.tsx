import React from 'react';
import './App.css';
import Board from './components/Board';
import Title from './components/Title';


const App: React.FC = () => {
  console.log("app");
  return (
    <div className="App">
      <Title />
      <Board />
    </div>
  );
}

export default App;
