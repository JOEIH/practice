import React from 'react';

//아래에 회원 정보를 보여줄 컴포넌트
const AddUserList = (props) => {
    const {userList, dispatch} = props

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>이름</td>
                        <td>나이</td>
                        <td>지역</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, idx) => (
                            <tr key={idx}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button onClick={() => dispatch({type: 'deleteMember', username: user.name})}>🗑️</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default AddUserList;