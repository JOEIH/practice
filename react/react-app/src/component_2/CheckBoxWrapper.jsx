import React, { useState } from 'react';

const CheckBoxWrapper = ({children}) => {

    return (
        <div>
            <h1>구매 목록</h1>
            {children}
        
        </div>
    );
};

export default CheckBoxWrapper;