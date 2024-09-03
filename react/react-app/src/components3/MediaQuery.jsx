import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => (props.primary ? "palevioletred" : "white")};
    border: ${(props) => (props.primary ? " 1px solid black" : "1px solid palevioletred")};
    color: ${(props) => (props.primary ? "white" : "black")};
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 1em;
    display: inline-block;
    cursor: pointer;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    height: 70px;
    width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const MediaQuery = () => {
    return (
        <Container>
            <Button>버튼 1</Button>
            <Button primary>버튼 1</Button>
        </Container>
    );
};

export default MediaQuery;