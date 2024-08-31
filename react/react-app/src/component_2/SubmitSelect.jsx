import React, { useState } from 'react';

const SubmitSelect = () => {
    const fruits = [
        {kr: '사과', en: 'apple'},
        {kr: '바나나', en: 'banana'},
        {kr: '복숭아', en: 'peach'},
        {kr: '포도', en: 'grape'}
    ]
    const [name, setName] = useState('')
    function selectedFruit(e) {
        setName(e.target.value)
    }
    function submitHandler(e) {
        e.preventDefault()
        console.log(`submit으로 전송한 데이터: ${name}`)
    }


    return (
        <div>
            <h1>선택한 과일: {name}</h1>
            <form onSubmit={submitHandler}>
                {/* select에 onchange 넣어야 option의 값이 반영됨 */}
                <select value={name} onChange={selectedFruit}>
                    {
                        fruits.map((fruit, index) => <option key={index} value={fruit.en}>{fruit.kr}</option>)
                    }
                </select>
                <input type="submit" value="전송" />
            </form>
        </div>
    );
};

export default SubmitSelect;