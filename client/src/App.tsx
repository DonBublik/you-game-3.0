import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './features/main/MainPage';

function App(): JSX.Element {

  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
    </Routes>
  );
}

export default App;
