import React, { useState } from 'react';

const AddList = () => {
    const [input, setInput] = useState('');
    const [content, setContent] = useState(['hyun', 'react'])

    function inputList() {
        setContent((prev) => [input, ...prev])
    }

    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={inputList}>추가</button>

            <div>
                {/* 여러개의 input 보여주기 위해서 content에 map 사용 */}
                {
                    content.map((item, idx) => <li key={idx}>{item}</li>)
                }
            </div>
        </div>
    );
};

export default AddList;