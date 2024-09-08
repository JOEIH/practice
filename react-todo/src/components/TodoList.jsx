import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
    // TodoTemplate 컴포넌트로부터 받아온 todoList와 deleteTodoList
    // todoList는 화면에 보여줄 투두리스트, deleteTodoList는 TodoListItem에서 삭제 기능 구현하기 위해 필요
    const {todoList, deleteTodoList} = props

    return (
        <div>
            <div className='todoList'>
                {/* 새롭게 추가되는 요소들 쉽게 다루기 위해 map함수 사용 */}
                {/* TodoListItem에 todoList 안 요소들의 아이디, 텍스트, 삭제기능 담당하는 함수 전달 */}
                {
                    todoList.map((todo) => (
                        <TodoListItem key={todo.id} id={todo.id} text={todo.text} checked={todo.status} deleteTodoList={deleteTodoList}/>
                    ))
                }
            </div>
        </div>
    );
};

export default TodoList;