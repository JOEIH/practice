import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const FooterTheme = () => {
    const {darkMode} = useContext(ThemeContext);

    const theme = {
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black"
    }

    return (
        <div style={theme}>
            Footer
        </div>
    );
};

export default FooterTheme;