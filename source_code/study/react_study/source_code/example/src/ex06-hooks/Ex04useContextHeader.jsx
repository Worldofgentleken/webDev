import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Ex04useContextHeader() {
  const theme = useContext(ThemeContext);

  return (
    <header style={
      {
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
      }
    }>
      <p>헤더 컴포넌트</p>
    </header>
  );
}

export default Ex04useContextHeader;
