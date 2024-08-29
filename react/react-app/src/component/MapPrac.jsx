import React from 'react';

const MapPrac = () => {
    const names = ['HTML', 'CSS', 'JavaScript', 'React'];
    const nameList = names.map((name, index) => 
        <li key={index}>{name}</li>
    )

    return (
        <div>
            {nameList}
        </div>
    );
};

export default MapPrac;