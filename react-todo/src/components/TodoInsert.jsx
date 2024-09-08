import React, { useState } from 'react';

const TodoInsert = (props) => {
    // TodoTemplate에서 받아온 addTodoList함수가 들어있는 상자 addTodoItem
    const {addTodoItem} = props;

    // 새로운 투두리스트의 text를 감지할 useState
    const [todo, setTodo] = useState('')

    //투두 추가
    function addTodo() {
        //input에 텍스트가 있으면
        if(todo) {
            //addTodoItem에 todo를 매개변수로 전달
            addTodoItem(todo)
            //연속 추가도 가능하게 todo가 바뀌기 전까지 상태 유지
            setTodo(todo)
        } else {
            //input이 비어있으면 경고창
            alert('내용 입력')
        }
    }
 
    return (
        <div>
            {/* 투두 텍스트 입력하는 input*/}
            {/* setTodo에 input의 value값 담아주기 */}
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            {/* 추가 버튼 */}
            <button onClick={addTodo}>추가</button>
        </div>
    );
};

export default TodoInsert;