import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;
const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    min-height: 70vh;
    height: 498px;
    padding:0  20px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
`
const Input = styled.input`
    font-family: Nuckle;
    font-style: normal;
    font-weight: 539;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: var(--black);
    background: var(--white);
    border: 1px solid rgb(228, 231, 238);
    border-radius: 8px;
    padding-left: 18px;
    height: 46px;
    width: 500px;
`
const Title = styled.p`
    font-size: 25px;
    font-weight: 600;
    height: 38px;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const Text = styled.p`
    height: 24px;
    margin: 0 auto;

    :hover{
        color: var(--blue);
    }
`

export { Container, Wrapper, Input, Title, Text };
