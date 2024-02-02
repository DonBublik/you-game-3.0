// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState, useAppDispatch } from '../../redux/store';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css'

const NavBar = (): JSX.Element => {
  // const user = useSelector((store: RootState) => store.users.users);

  return (
    <>
      <ul className='navbar_main'>
        {/* {user && <li>Привет, {user.name}</li>} */}
        <li><NavLink className={'navlink'} to="/">Главная</NavLink></li>
        <li><NavLink className={'navlink'} to="/sign-in">Войти</NavLink></li>
        <li><NavLink className={'navlink'} to="/sign-up">Зарегистрироваться</NavLink></li>
        <li><NavLink className={'navlink'} to="/logout">Выйти</NavLink></li>
      </ul>
    </>
  )
};

export default NavBar;
