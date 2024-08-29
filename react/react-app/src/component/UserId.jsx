import React from 'react';

const UserId = (props) => {
    function idValue(e) {
        props.checkId(e.target.value)
    }
    return (
        <div>
            <h3>ID: <input type='text' onChange={idValue}/></h3>
        </div>
    );
};

export default UserId;