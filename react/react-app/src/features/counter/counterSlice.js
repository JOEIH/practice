// createSlice() 자동으로 Action creator 생성
import { createSlice } from "@reduxjs/toolkit";

//createSlice로 action 생성 함수, reducer 함수를 하나의 파일에 작성
//Slice 이름 초기값 리듀서를 하나의 객체에 담아 전달받음
export const counterSlice = createSlice({
    name: "counterSlice", //slice 이름
    initialState: {  //초기값 
        cnt: 0
    },
    reducers: {  //리듀서 함수
        increment: (state) => {state.cnt += 1},
        decrement: (state) => {state.cnt -= 1},
        incrementByAmount: (state, action) => {state.cnt += action.payload}
    }
})

//Action 생성자 함수
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

//store에서 사용할 수 있게 export
export default counterSlice.reducer;