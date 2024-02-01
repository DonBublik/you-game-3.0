import ThemeItem from './ThemeItem';

const GamePage = (): JSX.Element => {
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
