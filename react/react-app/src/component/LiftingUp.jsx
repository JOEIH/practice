import React from 'react';

const LiftingUp = (props) => {
    function change(e) {
        props.changeSen(e.target.value)
    }
    return (
        <div>
            <h3>입력: <input type='text' onChange={change}/></h3>
        </div>
    );
};

export default LiftingUp;