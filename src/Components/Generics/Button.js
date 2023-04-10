import styled from "styled-components";

export const Button = styled.button`
/* background: ${({ b }) => b ? 'var(--black)' : 'var(--orange)'}; */
/* background-color: var(--orange);
border: none;
width: 160px;
height: 40px;
color:var(--white);
padding: 0px 18px;
font-size:20px; */

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 12px;
    height: 40px;
    padding: 0px 18px;
    width: auto;
    outline: none;
    border: none;
    font-family: Nuckle;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    background: rgb(251, 119, 75);
    color: rgb(255, 255, 255);
    transition: transform 0.2s ease-in-out 0s;

:active{
    transform: scale(.95);
}

`