import styled from 'styled-components';

const Container = styled.div`
    /* max-width: 1440px; */
    margin: 0 auto;
    padding: 0 100px;
    position: fixed;
    top: 0;
    width: 100%;
    right: auto;
    left: auto;
    background-color: var(--white);

.nav_link{
    text-decoration: none;
    font-weight: 500;
    font-size: 22px;
}
.nav_icon{
    font-size: 24px;
}
`;
const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
`;
const NavItems = styled.ul`
    display: flex;
    align-items:center;
    gap: 200px;
`
const NavItem = styled.li`
    list-style-type: none;
    display: flex;
    gap: 50px;
`
const Icons = styled.div`
    width: 180px;
    height: 48px;
    display: flex;
    align-items:center;
    gap: 20px;
    cursor: pointer;
`
const Input = styled.input`
    width: 100%;
    height:40px;
    outline: none;
    padding: 0 30px;
    font-size: 20px;
`
const Img = styled.img``
const Text = styled.p`
    height: 33px;
    font-size: 22px;
    width: 66px;

`
export { Container, Text, Img, Input, Wrapper, Icons, NavItem, NavItems };