import React, { useContext, useState } from 'react';
import HeaderTheme from './HeaderTheme';
import MainTheme from './MainTheme';
import FooterTheme from './FooterTheme';
import { ThemeContext } from './ThemeContext';

const ContextTheme = () => {
    const data = useContext(ThemeContext);
    console.log(data)

    return (
        <div className='theme-container'>
            <HeaderTheme />
            <MainTheme />
            <FooterTheme />
        </div>
    );
};

export default ContextTheme;