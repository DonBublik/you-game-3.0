import React, { useState } from 'react';
import './styles/auth.css';
import { User } from '../../redux/reducers/authReducer';
import { useAppDispatch } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();

    if (!email || !password || !name || !password || !rpassword) {
      alert('Не все поля заполнены!');
      return;
    }

    if (password !== rpassword) {
      alert('Пароли не совпадают!');
      return;
    }

    const res = await fetch('/api/auth/sign-up', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        img,
        password,
        rpassword,
      }),
    });

    const data: { message: string; user: User } = (await res.json()) as {
      message: string;
      user: User;
    };
    dispatch({ type: 'auth/sign-up', payload: data.user });
    navigate('/game');
  };
  return (
    <>
      <div className='signup-form'>
        <form onSubmit={onHandleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="имя"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="фото"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="пароль"
          />
          <input
            value={rpassword}
            onChange={(e) => setRpassword(e.target.value)}
            type="password"
            placeholder="повторите пароль"
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
      <p>
        Зарегистрируйтесь, либо <Link to="/">войдите</Link>
      </p>
    </>
  );
};

export default RegistrationPage;
