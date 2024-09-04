//현재 상태 state와 action 객체({key: value} 쌍)를 인자로 받음 
function reducer (state, action)  {
    switch (action.type) {
        //type: "addMember"이면 상태 업데이트
        case "addMember":
            return {
                //회원 수 더해주고
                cnt: state.cnt + 1,
                //이전 멤버에 새로운 멤버 추가
                member: [...state.member, action.newUser],
            };
        case "deleteMember": 
            return {
                cnt: state.cnt - 1,
                //단점: 이름이 같은 회원 다 같이 삭제됨
                //어떻게 해결할지?
                member: state.member.filter((user) => user.name !== action.username)
            };
        default:
            return state;
    }
}

export default reducer;