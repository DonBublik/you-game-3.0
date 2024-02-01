import React from 'react';
import AuthorizationPage from '../auth/AuthorizationPage';

function MainPage(): JSX.Element {
  return (
    <div>
      <h2>Main Page</h2>
      <AuthorizationPage/>
      <p>
        Если юзера нет то тут будет вход и ссылка на регу, а если есть то
        переход в игру
      </p>
    </div>
  );
}

export default MainPage;
