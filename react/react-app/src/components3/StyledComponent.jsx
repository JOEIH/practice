import React from 'react';
import styled from 'styled-components';

const StyledComponent = () => {
    const Button = styled.button`
    background-color: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    border: 1px solid palevioletred;
    border-radius: 3px;
    padding: 0.25em 1em;
    cursor: pointer;
    display: inline-block;
    margin: 1em;
`;
    return (
        <div>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    );
};

export default StyledComponent;