import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const HeaderTheme = () => {
    // context를 하위 컴포넌트에서 이용
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const theme = {
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black"
    }

    return (
        <div style={theme}>
            Header
            {
                darkMode ? (
                    <button onClick={toggleDarkMode}>😎</button>) 
                    : (<button onClick={toggleDarkMode}>🤩</button>
                )
            }
            <hr />
        </div>
    );
};

export default HeaderTheme;