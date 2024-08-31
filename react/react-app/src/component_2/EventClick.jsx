import React, { useState } from 'react';

const EventClick = () => {
    const [hi, sayHi] = useState('안녕하세요')
    function clickHi() {
        console.log(hi)
    }
    return (
        <div>
            <h1>{hi}</h1>
            <button onClick={clickHi}>클릭</button>
        </div>
    );
};

export default EventClick;