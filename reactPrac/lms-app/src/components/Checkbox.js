import React from 'react';

const Checkbox = React.memo(({label = 'Label', on = false, onChange}) => {
    return (
        <div>
            {label}
            <input type='checkbox' defaultChecked={on} onChange={onChange} />
        </div>
    );
});

export default Checkbox;