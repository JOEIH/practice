import React, { useState } from 'react';

const UseStatePrac = () => {
    const [cnt, setCnt] = useState(0)
    function cntHandler(e) {
        if(e.target.value === 'plus') {
            setCnt(cnt + 1)
        }else if (e.target.value === 'minus') {
            setCnt(cnt - 1)
        }
    }

    return (
        <div>
            <div>현재 카운터 값은 <b>{cnt}</b>입니다</div>
            <button value="plus" onClick={cntHandler}>+1</button>
            <button value="minus" onClick={cntHandler}>-1</button>
        </div>
    );
};

export default UseStatePrac;