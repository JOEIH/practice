import React, { useEffect, useState } from 'react';

const Asynchronous = () => {
    const [cnt, setCnt] = useState(0)

    function cntUp() {
        setCnt((cnt) => cnt + 1);
        setCnt((cnt) => cnt + 1);
    }

    useEffect(() => {
        
    }, [cnt])

    return (
        <div>
            {cnt}<br />
            <button onClick={cntUp}>cntUp</button>
        </div>
    );
};

export default Asynchronous;