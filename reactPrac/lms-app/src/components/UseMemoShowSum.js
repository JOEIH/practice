import React, { useMemo } from 'react';

function sum(n) {
    console.log('Start');
    let result = 0;
    for (let i = 1; i <= n; i+= 1) {
        result += i;
    }
    console.log('Finished')
    return result;
}

const UseMemoShowSum = ({label, n}) => {
    const result = useMemo(() => sum(n), [n]);
    return (
        <span>
            {label} : {result}
        </span>
    );
};

export default UseMemoShowSum;