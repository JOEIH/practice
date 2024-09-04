import React, { useReducer, useState } from 'react';
import AddUser from './AddUser';
import reducer from './userReducer';

const UserList = () => {
    //변경할 정보는 회원 수, 유저
    const initialState = {
        cnt: 0,
        member: []
    }

    //추가, 삭제버튼 구현 위한 reducer
    //userList는 state, dispatch는 액션 발생시키는 함수
    //reducer함수, 초기 상태 값을 지정
    const [userList, dispatch] = useReducer(reducer, initialState)
    //추가하려는 회원 정보를 담은 객체 newUser, 추가되는 회원으로 state를 변경하기 위한 setNewUser
    const [newUser, setNewUser] = useState({})

    function changeHandler(e) {
        //유저 정보 수정
        setNewUser((prev) => ({
            //이전 유저 정보를 새로운 유저 정보로 변경
            ...prev,
            [e.target.name]: e.target.value, 
        }))
    }


    return (
        <div>
            <h1>전체 회원 수: {userList.cnt}</h1>
            <label>
                {/* input에 name을 지정해주면 끌어다 쓰기 편함 */}
                이름: <input type="text" name='name' onChange={changeHandler}/>
            </label>
            <label>
                나이: <input type="text" name='age' onChange={changeHandler}/>
            </label>
            <label>
                지역: <input type="text" name='region' onChange={changeHandler}/>
            </label>
            {/* button을 누르면 dispatch함수에 type과 newUser를 전달 */}
            {/* key: value 쌍이 action */}
            <button onClick={() => {dispatch({type: "addMember", newUser: newUser})}}>
                추가
            </button>

            <div>
                {/* 아래에 회원 정보를 추가하기 위해 AddUser컴포넌트에 userList의 member와 디스패치를 전달 */}
                <AddUser userList={userList.member} dispatch={dispatch} />
            </div>
        </div>
    );
};

export default UserList;