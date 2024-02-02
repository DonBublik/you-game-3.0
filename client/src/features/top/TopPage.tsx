import { useEffect } from 'react';
import { User } from '../../redux/reducers/authReducer';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import './styles/top.css';
import { Link } from 'react-router-dom';

function TopPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const getUser = async (): Promise<void> => {
    const res = await fetch('/api/users');
    const data: { users: User[] } = (await res.json()) as { users: User[] };

    dispatch({ type: 'load/users', payload: data.users });
  };

  useEffect(() => {
    getUser().catch(console.log);
  }, []);

  const users = useSelector((store: RootState) => store.users.users);

  const user = useSelector((store: RootState) => store.auth.auth);
  user && localStorage.setItem('user', JSON.stringify(user));

  const storedUser: string = localStorage.getItem('user') as string;
  const newUser: User = JSON.parse(storedUser);

  return (
    <div className="container">
      <h2>Лучшие игроки:</h2>
      {users.slice(0, 5).map((user) => {
        return (
          <div className="user-card">
            <div>{user.name}</div>
            <div>{user.max_result}</div>
          </div>
        );
      })}
      {!newUser&& (
        <p>
        <Link to="/">Ко входу</Link>
      </p>
      )}
      
    </div>
  );
}

export default TopPage;