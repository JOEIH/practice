import React from 'react';

const AddUser = (props) => {
    // const initialState = {
    //     cnt: 0,
    //     member: []
    // }

    //부모 컴포넌트에게서 userList와 dispatch를 받아옴
    //userList={userList.member}
    //dispatch={dispatch}
    const {userList, dispatch} = props

    return (
        <div>
            {/* 회원 정보를 아래에 차례대로 뿌려줄 것이므로 table 이용 */}
            <table>
                {/* 상단 고정 */}
                <thead>
                    <tr>
                        <td>이름</td>
                        <td>나이</td>
                        <td>지역</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                {/* 아래에 차례로 추가할 회원 정보 */}
                <tbody>
                    {/* 받아온 userList의 member map으로 돌리기 */}
                    {userList.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.region}</td>
                            <td>
                                <button onClick={() => dispatch({type: "deleteMember", username: user.name})}>❌</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AddUser;