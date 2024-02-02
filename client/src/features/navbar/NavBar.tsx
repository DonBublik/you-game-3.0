// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState, useAppDispatch } from '../../redux/store';
import { NavLink, useNavigate } from 'react-router-dom';
import './styles/navbar.css';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);
  console.log(user);
  

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    const res = await fetch('/api/auth/logout');
    const data: { message: string } = (await res.json()) as { message: string };
    if (data.message === 'success') {
      dispatch({ type: 'auth/logout' });
      navigate('/');
    }
  };
  return (
    <>
      <ul className="navbar_main">
        {user && <li>Привет, {user.name}</li>}
        <li>
          <NavLink className={'navlink'} to="/">
            Главная
          </NavLink>
        </li>
        {!user && <li>
          <NavLink className={'navlink'} to="/sign-up">
            Зарегистрироваться
          </NavLink>
        </li>}
        
        <li onClick={handleLogout}>
          <NavLink to="/">Выйти</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
