import styled, { css } from 'styled-components';

export const common = css`
    color:var(--blue);
    font-size: 17px;
    font-weight: 600;
    height: 26px;
    width: 352px;
    text-align: left;
    cursor:text;
`
const Container = styled.div`
    width:99%;
    height:450px;

`;
const Wrapper = styled.div`
    max-width:1440px;
    width:100%;
    margin:0 auto ;
    display:flex;
    align-items:center;
`;
const Div = styled.div`
   display:flex;
   flex-direction:column;
   gap:10px;
   align-items: flex-start;
`;
const Inner = styled.div`
    max-width:840px;
    display: flex;
    gap:30px;
    margin:0 auto;
    margin-top:100px;
`;
const Name = styled.h2`
    text-align: left;
    font-weight: 700;
    font-size: 1.8rem;
    height:44px;
    width:352px;
`;
const Info = styled.h1`
   ${common}
`;
const Password = styled.p`
    ${common}
    -webkit-text-security: disc !important;
`
const User = styled.img`
    width:200px;
    height:200px;
    border:1px solid var(--black);
    padding:10px;
`

export { Container, Div, Inner, Password, User, Name, Info, Wrapper };
