import React from 'react';

const RegistrationPage = (): JSX.Element => {
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
