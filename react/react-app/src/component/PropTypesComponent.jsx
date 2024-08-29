import React from 'react';
import PropTypes from 'prop-types';

const PropTypesComponent = (props) => {
    const {name, age = 20, region} = props
    return (
        <div>
            이름: {name}<br />
            나이: {age}<br />
            지역: {region}
        </div>
    );
};

PropTypesComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    region: PropTypes.string
}

export default PropTypesComponent;