import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const MainTheme = () => {
    const {darkMode} = useContext(ThemeContext);

    const theme = {
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black"
    }

    return (
        <div style={theme}>
            Main
            <hr />
        </div>
    );
};

export default MainTheme;