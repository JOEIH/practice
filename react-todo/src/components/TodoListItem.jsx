import React from 'react';

const TodoListItem = (props) => {
    //TodoList로부터 받아온 투두리스트 하나하나의 id, text 그리고 삭제함수
    const {id, text, deleteTodoList} = props

    return (
        <div id={id}>
            <div className='todo-Textarea'>
                <label>
                    <input type='checkbox' />
                    <div>{text}</div>
                </label>
            </div>

            {/* 삭제기능을 담당하는 함수에 투두리스트 하나하나의 id를 담아서 전달 */}
            <button onClick={() => deleteTodoList(id)}>delete</button>
        </div>
    );
};

export default TodoListItem;