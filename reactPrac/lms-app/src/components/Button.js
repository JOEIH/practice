import styled from '@emotion/styled'

const Button = styled.button`
    display: block;
    background-color: black;
    width: 100%;
    padding: 8px 6px;
    height: 40px;
    color: white;
    border-radius: 5px;
    border: none;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background-color: #111;
    }

    &:active {
        background-color: #222;
    }

    &:disabled {
        background-color: #888;
    }
`   

export default Button;