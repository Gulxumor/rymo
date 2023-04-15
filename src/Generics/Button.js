import styled from "styled-components";

export const Button = styled.button`
    background: ${({ b }) => b ? 'var(--black)' : 'var(--orange)'};
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 12px;
    height: 40px;
    padding: 0px 18px;
    width: ${({ w }) => w ? "500px" : "150px"};
    outline: none;
    border: none;
    font-family: Nuckle;
    font-size: 16px;
    font-weight: ${({ w }) => w ? "400" : ""};
    line-height: 19px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: var(--white);
    transition: transform 0.2s ease-in-out 0s;

:active{
    transform: scale(.95);
}

`