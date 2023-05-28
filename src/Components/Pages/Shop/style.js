import styled, { css } from 'styled-components';
export const common = css`
    width: 825px;  
    text-align: left;
`
const Container = styled.div`
    width: 100%;

`;
const Wrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 131px;
`;
const Title = styled.h1`
    height: 44px;
    font-weight: 700;
    font-size: 1.8rem;
    ${common}
`;
const Text = styled.p`
    height: 44px;
    ${common}
`;

export { Container, Text, Title, Wrapper };
