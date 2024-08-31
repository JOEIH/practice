import React, { useState } from 'react';

const ImgAndSelect = () => {
    const fruits = [
        {name: '사과', src: "/images/apple.png"},
        {name: '오렌지', src: "/images/orange.png"},
        {name: '딸기', src: "/images/strawberry.png"}
    ]
    const [src, setSrc] = useState('')
    function showImg(e) {
        setSrc(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h1>선택한 과일 이미지: {src}</h1>
            <form onSubmit={submitHandler}>
                <select onChange={showImg}>
                    {
                        fruits.map((item, index) => 
                            <option key={index} value={item.src}>{item.name}</option>
                        )
                    }
                </select>
                <img src={src} alt="과일 이미지" width="100px" />
            </form>
        </div>
    );
};

export default ImgAndSelect;