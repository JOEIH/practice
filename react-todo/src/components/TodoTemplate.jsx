import React, { useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplate = () => {
    //투두 초기값 설정
    const todoArr = [
        {
            id: 0, 
            text: '투두'
        }
    ]

    //useState 초기값으로 todoArr
    const [todoList, setTodoList] = useState(todoArr);

    //투두 추가
    // TodoInsert 컴포넌트로부터 전달된 todo의 텍스트를 이용해 투두리스트 상태 변경
    function addTodoList(todo) {
        //상태변화 반영된 새로운 투두리스트 만들기
        const newTodoList = [...todoList]
        //새 투두리스트에 새로운 아이템 추가
        newTodoList.push({id: newTodoList.length, text:todo, status: false})
        //추가한 아이템까지 반영된 투두리스트를 보여줌
        setTodoList(newTodoList)
    }

    //투두 삭제 - id이용
    //TodoListItem에서 가져온 투두의 id를 이용해서 투두 삭제
    function deleteTodoList(id) {
        //투두리스트에서 삭제하려는 id와 다른 id를 가진 투두리스트만 보여주기
        setTodoList(todoList.filter((todo) => todo.id !== id))
    }
                
    return (
        <div>
            {/* 투두리스트 input 컴포넌트에 addTodoList함수 전달 */}
            <TodoInsert addTodoItem={addTodoList}/>
            {/* 투두리스트를 보여주는 곳에 todoList와 투두 삭제하는 deleteTodoList 함수를 전달 */}
            <TodoList todoList={todoList} deleteTodoList={deleteTodoList}/>
        </div>
    );
};

export default TodoTemplate;