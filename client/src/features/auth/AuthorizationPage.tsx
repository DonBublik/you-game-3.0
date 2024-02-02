import React, {useState} from 'react';
import type { User } from '../../redux/reducers/authReducer';
import { useAppDispatch } from '../../redux/store';


const AuthorizationPage = (): JSX.Element => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const dispatch = useAppDispatch();

const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault()
    const res = await fetch('/api/auth/sign-in', {
        method: 'post',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
            email,
            password
        })
    })
    const data: {message: string; user: User}= await res.json() as {message: string; user: User}
    dispatch({type: 'auth/sign-in', payload: data.user})
    setEmail('')
    setPassword('')
}

  return (
    <>
      <div>AuthorizationPage</div>
      <div className='signin-form'>
      <form onSubmit={onHandleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='пароль' />
        <button type='submit'>Войти</button>
      </form>
      </div>
    </>
  );
};

export default AuthorizationPage;
