import React from 'react';

const AuthorizationPage = (): JSX.Element => {
  return (
    <>
      <div>AuthorizationPage</div>
      <form action=''>
        <input type='text' placeholder='email' />
        <input type='text' placeholder='пароль' />
        <button type='submit'>Войти</button>
      </form>
    </>
  );
};

export default AuthorizationPage;
