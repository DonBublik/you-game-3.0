import React from 'react';

import GamePage from '../game/GamePage';

import AuthorizationPage from '../auth/AuthorizationPage';

import { Link } from 'react-router-dom';

function MainPage(): JSX.Element {
  return (
    <div className='container'>
      <AuthorizationPage />
      <p>
        Войдите, либо <Link to="/sign-up">зарегистрируйтесь</Link>
      </p>
    </div>
  );
}

export default MainPage;
