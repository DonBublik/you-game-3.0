import React from 'react';

import GamePage from '../game/GamePage';

import AuthorizationPage from '../auth/AuthorizationPage';
import RegistrationPage from '../auth/RegistrationPage';


function MainPage(): JSX.Element {
  return (
    <div>
      <h2>Main Page</h2>

      {/* <GamePage/> */}

     <RegistrationPage/>
      <AuthorizationPage/> 

        <p>Если юзера нет то тут будет вход и ссылка на регу, а если есть то

        переход в игру
      </p> 

    </div>
  );
}

export default MainPage;
