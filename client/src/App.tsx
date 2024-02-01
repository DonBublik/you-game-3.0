import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './features/main/MainPage';
import GamePage from './features/game/GamePage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game" element={<GamePage/>} />
    </Routes>
  );
}

export default App;
