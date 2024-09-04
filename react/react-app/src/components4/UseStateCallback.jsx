import React, { useState } from 'react';

const UseStateCallback = () => {
    const [input, setInput] = useState(() => heavyWork());
    const [content, setContent] = useState('')

    function heavyWork() {
        for(let i = 0; i < 1000; i++) {
            console.log('복잡한 계산 중')
        }
        return ['hyun', 'react']
    }

    function inputList() {
        setInput((prev) => [input, ...prev])
    }


    return (
        <div>
            <input type="text" onChange={(e) => setContent(e.target.value)}/>
            <button onClick={inputList}>추가</button>

            <div>
                {/* 여러개의 input 보여주기 위해서 content에 map 사용 */}
                {
                    input.map((item, idx) => <li key={idx}>{item}</li>)
                }
            </div>
        </div>
    );
};

export default UseStateCallback;