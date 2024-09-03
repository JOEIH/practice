import React from 'react';
import "../Nesting.scss";

const Nesting = () => {
    return (
        <div className='wrap'>
            <ul>
                <li className='wrap-red'>빨강</li>
                <li className='wrap-green'>초록</li>
                <li className='wrap-blue'>파랑</li>
            </ul>
        </div>
    );
};

export default Nesting;