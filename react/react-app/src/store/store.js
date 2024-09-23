// redux store 생성
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/counter/counterSlice";

//사용할 reducer들을 하나의 객체로 묶어주는 함수 combineReducers
const rootReducer = combineReducers({
    counter: counterSlice,
})

//store 생성 함수 configureStore()
const store = configureStore({
    reducer: rootReducer,
})

export default store;