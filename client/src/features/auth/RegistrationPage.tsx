import React, {useState} from 'react';

const RegistrationPage = (): JSX.Element => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [img, setImg] = useState('')
const [password, setPassword] = useState('')
const [rpassword, setRpassword] = useState('')

const dispatch = useAppDispatch()

const onHandleSubmit: React.FormEventHandler

  return (
    <>
      <div>RegistrationPage</div>
      <form action=''>
        <input type='text' placeholder='имя' />
        <input type='text' placeholder='email' />
        <input type='text' placeholder='пароль' />
        <input type='text' placeholder='повторите пароль' />
        <button type='submit'>Зарегистрироваться</button>
      </form>
    </>
  );
};

export default RegistrationPage;
