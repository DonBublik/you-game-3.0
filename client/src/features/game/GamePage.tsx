import ThemeItem from './ThemeItem';
import { useAppDispatch } from '../../redux/store';

const GamePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const loadThemes =async (): Promise<void> => {
    
  }

  const themes = [];
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
