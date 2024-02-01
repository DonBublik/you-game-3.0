
import { Theme } from '../../redux/reducers/themeTypes';

const ThemeItem = ({ theme }: { theme: Theme }): JSX.Element => {
  return (
    <div>{theme.id}</div>
    )
};

export default ThemeItem;
