import React, { useState } from 'react';

const CheckBox = () => {
    const products = [
        {name: '모자 1만원', price: 10000},
        {name: '신발 3만원', price: 30000},
        {name: '가방 8만원', price: 80000}
    ]
    const [total, setTotal] = useState(0)
    function totalPrice(e) {
        if(e.target.checked) {
            setTotal((prev) => prev + parseInt(e.target.value))
        } else {
            setTotal((prev) => prev - parseInt(e.target.value))
        }
        
    }

    return (
        <div>
            {
                products.map((item, index) =>  <label key={index}><input type="checkbox" value={item.price} onChange={totalPrice}/>{item.name}<br /></label>)
            }
            <br />
            <div>합계: {total}</div>
        </div>
    );
};

export default CheckBox;