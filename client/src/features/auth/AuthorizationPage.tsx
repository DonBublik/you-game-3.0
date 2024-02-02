import React, { useState } from 'react';
import type { User } from '../../redux/reducers/authReducer';
import { useAppDispatch } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';

const AuthorizationPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({email: '', password: ''})
 
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      errors.email = 'Заполните поля';
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = 'Заполните поля';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    const res = await fetch('/api/auth/sign-in', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data: { message: string; user: User } = (await res.json()) as {
      message: string;
      user: User;
    };
    dispatch({ type: 'auth/sign-in', payload: data.user });
    navigate('/game');
    setEmail('');
    setPassword('');
  };

  return (
    <>

      {errors.email && <span className='error'>{errors.email}</span>}
      {errors.password && <span className='error'>{errors.password}</span>}
      <div className='signin-form'>

        <form onSubmit={onHandleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            type='text'
            placeholder='email'

          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            type="password"
            placeholder="пароль"
          />
          <button type="submit">Войти</button>

        </form>
      </div>
      <p>
        Войдите, либо <Link to="/sign-up">зарегистрируйтесь</Link>
      </p>
    </>
  );
};

export default AuthorizationPage;
