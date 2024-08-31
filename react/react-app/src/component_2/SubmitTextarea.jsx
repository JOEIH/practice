import React, { useState } from 'react';

const SubmitTextarea = () => {
    const [content, setContent] = useState('')
    function textareaValue(value) {
        setContent(value)
    }
    function submitHandler(e) {
        e.preventDefault();
        console.log(`submit으로 받은 데이터: ${content}`)
    }

    return (
        <div>
            <h1>내용: {content}</h1>
            <form onSubmit={submitHandler}>
                <textarea onChange={(e) => textareaValue(e.target.value)}></textarea>
                <input type="submit" value="전송" />
            </form>
        </div>
    );
};

export default SubmitTextarea;