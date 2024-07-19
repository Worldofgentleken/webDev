import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Ex04useContextTheme() {
  const theme = useContext(ThemeContext);

  return (
    <div style={
      {
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
      }
    }>
      Theme is {theme}
    </div>
  );
}

export default Ex04useContextTheme;
