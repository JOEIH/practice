import React, { useReducer, useState } from 'react';
import AddUserList from './AddUserList';
import userHandler from './userHandler';
import "../AddUser.scss"

//위에서 회원 정보 추가할 컴포넌트
const AddUser = () => {
    const initialState = {
        cnt: 0,
        members: []
    }

    const [userList, dispatch] = useReducer(userHandler, initialState);
    const [newUser, setNewUser] = useState({}) //회원은 이름, 나이, 지역 정보를 갖고 있어야 하므로 객체로 설정

    function updateUser(e) {
        setNewUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className='wholeContainer'>
            <h2>전체 회원 수</h2>
            <div className="inputContainer">
                <label>
                    이름: <input type="text" name='name' onChange={updateUser}/>
                </label>
                <label>
                    나이: <input type="text" name='age' onChange={updateUser}/>
                </label>
                <label>
                    지역: <input type="text" name='address' onChange={updateUser}/>
                </label>
            </div>
            <button className='addUserBtn' onClick={() => dispatch({type: "addMember", user: newUser})}>회원 추가</button>

            <div className="userList">
                <AddUserList userList={userList.members} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default AddUser;