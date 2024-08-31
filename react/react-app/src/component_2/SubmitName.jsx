import React, { useState } from 'react';

const SubmitName = () => {
    const [name, setName] = useState('');
    function submitName(e) {
        setName(e.target.value)
    }
    function submitHandler(e) {
        e.preventDefault()
        console.log(`submit으로 받은 데이터: ${name}`)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>이름: {name}</h1>
                <input type="text" onChange={submitName}/>
                {/* 아래 두 개 같은 기능 */}
                {/* <button>전송</button> */}
                <input type="submit" value="전송"/>
            </form>
        </div>
    );
};

export default SubmitName;