// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState, useAppDispatch } from '../../redux/store';
import { NavLink, useNavigate } from 'react-router-dom';
import './styles/navbar.css';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { User } from '../../redux/reducers/authReducer';

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);

  user && localStorage.setItem('user', JSON.stringify(user));

  const storedUser: string = localStorage.getItem('user') as string;
  const newUser: User = JSON.parse(storedUser);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    const res = await fetch('/api/auth/logout');
    const data: { message: string } = (await res.json()) as { message: string };
    if (data.message === 'success') {
      dispatch({ type: 'auth/logout' });
      navigate('/');
      localStorage.removeItem('user');
    }
  };
  return (
    <>
      <ul className="navbar_main">
        {newUser && (
          <li className='user'>
            Привет, {newUser.name}. Ваш текущий счет {newUser.max_result}
          </li>
        )}

        <NavLink className={'navlink'} to="/top">
          Топ
        </NavLink>

        {user && (
          <li>
            <NavLink className={'navlink'} to="/game">
              Игра
            </NavLink>
          </li>
        )}

        {user && (
          <li onClick={handleLogout}>
            <NavLink to="/">Выйти</NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

export default NavBar;
