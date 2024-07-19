import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Ex04useContextFooter() {
    const theme = useContext(ThemeContext);

    return (
        <footer style={
            { 
            background: theme === 'light' ? '#fff' : '#333', 
            color: theme === 'light' ? '#000' : '#fff'
            }
        }>
            <p>푸터 컴포넌트</p>
        </footer>
    );
}

export default Ex04useContextFooter;
