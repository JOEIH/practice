import React, { useState } from 'react';

const TextHi = () => {
    const [content, setContent] = useState('입력하세요.')
    function consoleFunc(e) {
        console.log(e.target.value)
    }
    function screen(e) {
        setContent(e.target.value)
    }

    return (
        <div>
            <h2>{content}</h2>
            <input type="text" onChange={consoleFunc} />
            <input type="text" onChange={screen} />
        </div>
    );
};

export default TextHi;