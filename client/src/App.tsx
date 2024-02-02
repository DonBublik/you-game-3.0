import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './features/main/MainPage';
import GamePage from './features/game/GamePage';
import type { User } from './redux/reducers/authReducer';
import { RootState, store, useAppDispatch } from './redux/store';
import NavBar from './features/navbar/NavBar';
import RegistrationPage from './features/auth/RegistrationPage';
import { useSelector } from 'react-redux';

function App(): JSX.Element {

  const dispatch = useAppDispatch();


  const checkUser = async (): Promise<void> => {
    const res = await fetch('api/auth/check');
    const data: { user: User } = (await res.json()) as { user: User };
    dispatch({ type: 'auth/logout', payload: data.user });
  };
//  const userResult = useSelector((store:RootState) => store.auth.auth?.max_result)

  useEffect(() => {
    checkUser().catch(console.log);
  });

  return (
    <>
      <div className="App">
        <NavBar />
        <div className="App-body">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/sign-up" element={<RegistrationPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
