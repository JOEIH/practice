import React from 'react';

const Properties = ({name = "이름"}) => {
    return (
        <div>
            안녕하세요 제 이름은 {name}입니다.
        </div>
    );
};

export default Properties;