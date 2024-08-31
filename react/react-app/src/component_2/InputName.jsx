import React, { useState } from 'react';

const InputName = () => {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    function inputName(e) {
        setName(e.target.value)
    }
    function inputContent(e) {
        setContent(e.target.value)
    }

    return (
        <div>
            <h2>사용자 이름: {name}</h2>
            <h2>내용: {content}</h2>
            <input type="text" onChange={inputName}/>
            <input type="text" onChange={inputContent}/>
        </div>
    );
};

export default InputName;