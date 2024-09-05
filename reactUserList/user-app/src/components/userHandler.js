function userHandler(state, action) {
    switch (action.type) {
        //초기상태 업데이트
        case "addMember":
            return {
                cnt: state.cnt + 1,
                members: [...state.members, action.user]
            }
        case "deleteMember":
            return {
                cnt: state.cnt - 1,
                //member에서 조건에 만족하는 요소만 걸러내기
                //member안에 있는 요소들의 name 중 삭제를 누른 유저의 username과 다른 것만 보여주기 -> 같은 이름은 전부 삭제될 위험이 있음
                members: state.members.filter((user) => user.name !== action.username)
            }
        default:
            return state;
    }
}

export default userHandler;