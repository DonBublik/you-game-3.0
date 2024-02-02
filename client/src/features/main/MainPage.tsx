import React from 'react';

// import GamePage from '../game/GamePage';

import AuthorizationPage from '../auth/AuthorizationPage';
import RegistrationPage from '../auth/RegistrationPage';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../redux/store';
import { NavLink, useNavigate } from 'react-router-dom';



function MainPage(): JSX.Element {

const dispatch = useAppDispatch()

const navigate = useNavigate()

const handleLogout = async (): Promise<void> => {
  const res = await fetch('/api/auth/logout')
  const data: {message: string} = (await res.json()) as {message: string}
  if (data.message === 'success') {
    dispatch({type: 'auth/logout'})
    navigate('/')
  }
}

  return (
    <div>
      <h2>Main Page</h2>

      {/* <GamePage/> */}


     <RegistrationPage/>
      <AuthorizationPage/> 

      <li onClick={handleLogout} >
          <NavLink to="/logout">
            Выйти
          </NavLink>
        </li>

        <p>Если юзера нет то тут будет вход и ссылка на регу, а если есть то

        переход в игру
      </p> 

      <p>
        Войдите, либо <Link to='/sign-up'>зарегистрируйтесь</Link>
      </p>
    </div>
  );
}

export default MainPage;
