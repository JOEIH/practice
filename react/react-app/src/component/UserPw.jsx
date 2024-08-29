import React from 'react';

const UserPw = (props) => {
    function pwValue(e) {
        props.checkPw(e.target.value)
    }

    return (
        <div>
            <h3>PW: <input type='text' onChange={pwValue}/></h3>
        </div>
    );
};

export default UserPw;