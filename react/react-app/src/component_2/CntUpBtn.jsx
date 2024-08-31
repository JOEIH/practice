import React, { useState } from 'react';

const CntUpBtn = (props) => {
    const [num, setNum] = useState(0)
    function count() {
        setNum(num+1)
        props.onAdd()
    }

    const style = {
        width: "150px",
        height: "200px",
        boxShadow: "2px 2px 2px black",
        borderRadius: "10px",
        margin: "5px",
        backgroundColor: "lightgray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    const btnStyle = {
        cursor: "pointer",
        borderStyle: "none",
        width: "60px",
        height: "40px",
        backgroundColor: "white",
        borderRadius: "10px"
    }

    return (
        <div style={{display: "inline-block"}}>
            <div className="container" style={style}>
                <h1>{num}</h1>
                <button onClick={count} style={btnStyle}>클릭</button>
            </div>
        </div>
    );
};

export default CntUpBtn;