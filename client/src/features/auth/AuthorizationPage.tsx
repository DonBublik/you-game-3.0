import React, {useState} from 'react';
import type { User } from '../../redux/reducers/authReducer';


const AuthorizationPage = (): JSX.Element => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const dispatch = useAppDispatch();

const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promse<void> => {
    e.preventDefault()
    const res = await fetch('/api/auth/sign-in', {
        method: 'post',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
            name,
            password
        })
    })
    const data: {message: string; user: User}= await res.json() as {message: string; user: User}
    console.log(data)
    dispatch({type: 'auth/sign-in', payload: data.user})
}


  return (
    <>
      <div>AuthorizationPage</div>
      <form onSubmit={onHandleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='пароль' />
        <button type='submit'>Войти</button>
      </form>
    </>
  );
};

export default AuthorizationPage;
