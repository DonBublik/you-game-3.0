import AuthorizationPage from '../auth/AuthorizationPage';

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
