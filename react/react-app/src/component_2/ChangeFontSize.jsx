import React, { useState } from 'react';

const ChangeFontSize = () => {
    const [size, setSize] = useState('20px');
    //함수 안 쓰고 setSize만 써도 됨
    // function sizeChange(size) {
    //     setSize(size)
    // }
    const style = {
        fontSize: size
    }
    
    return (
        <div>
            <div style={style}>안녕하세요</div>
            <button onClick={function(){setSize('50px')}}>글자크기 변경</button>
        </div>
    );
};

export default ChangeFontSize;