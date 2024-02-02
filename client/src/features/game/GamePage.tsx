import ThemeItem from './ThemeItem';
import { RootState, useAppDispatch } from '../../redux/store';
import { Theme } from '../../redux/reducers/themeTypes';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const GamePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const loadThemes = async (): Promise<void> => {
    const res = await fetch('/api/themes');
    const data: { themes: Theme[] } = (await res.json()) as { themes: Theme[] };

    dispatch({ type: 'themes/load', payload: data.themes });
  };

  const themes = useSelector((store: RootState) => store.themes.themes);
  

  useEffect(() => {
    loadThemes().catch(console.log);
  }, []);

  return (
    <>
      <div className="game-main">GamePage</div>
      
      {themes.map((theme) => (
        <ThemeItem key={theme.id} theme={theme} />
      ))}
      
    </>
  );
};

export default GamePage;
