import React, { useState } from 'react';

const StatePrac = () => {
    const fruits = [
        {
            name: "apple",
            price: 3000
        },
        {
            name: "pineapple",
            price: 4000
        }
    ]

    const student1 = {major: 'japanese'}
    const student2 = {...student1, subMajor:"SW"}
    const student3 = {...student2, region: "seoul"}
    const student4 = {region: "suwon", ...student3}

    const [value, setValue] = useState({a:1, b:2, c: 3})
    function changeVal() {
        const newObj = {...value, b: 3}
        setValue(newObj)
    }

    const[arr, setArr] = useState([1, 2, 3, 4])

    return (
        <div>
            {
                fruits.map((fruit, index) => <li key={index}>{fruit.name}/{fruit.price}원</li>)
            }
            <hr/>
            <h3>{JSON.stringify(student1)}</h3>
            <h3>{JSON.stringify(student2)}</h3>
            <h3>{JSON.stringify(student3)}</h3>
            <h3>{JSON.stringify(student4)}</h3>
            <hr />
            <h3>{JSON.stringify(value)}</h3>
            <button onClick={changeVal}>클릭</button>
            <hr/>
            <h3>{JSON.stringify(arr)}</h3>
        </div>
    );
};

export default StatePrac;