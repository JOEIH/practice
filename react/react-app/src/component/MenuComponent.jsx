import React from 'react';

const MenuComponent = (props) => {
    const {title, open, image} = props
    const style = {
        display: "inline-block",
        border: "1px solid black",
        margin: "5px",
        textAlign: "center"
    }
    return (
        <div style={style}>
            <div className="container">
                <h4>제목: {title}</h4>
                <p>개봉일 {open}</p>
                <img src={image} alt="포스터" width="250px"/>
            </div>
        </div>
    );
};

export default MenuComponent;