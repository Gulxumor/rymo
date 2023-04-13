import styled from 'styled-components';
import { Modal } from 'antd';

const Container = styled.div`
    width: 100%;
    height: 80px;
    margin: 0 auto;
    padding: 0 100px;
    background-color: var(--white);
    /* position: sticky; */
    z-index: 999;
    top: 0;
    box-shadow: 0px 0px 23px -2px rgba(0,0,0,0.63);

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
    max-width:1440px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    margin: 0 auto;
`;
const NavItems = styled.ul`
    display: flex;
    align-items:center;
    gap: 50px;
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
const Madal = styled(Modal)`
    width:50%;
`

const Input = styled.input`
    width: 100%;
    height:40px;
    outline: none;
    padding: 0 30px;
    font-size: 20px;
`
const Img = styled.img`
    margin-top:10px;
`
const Text = styled.p`
    height: 33px;
    font-size: 22px;
    width: 66px;
    text-decoration-style: solid;

`
export { Container, Text, Madal, Img, Input, Wrapper, Icons, NavItem, NavItems };


/*  Media
@media(max-width:1300px) {}
@media(max-width:1200px) {}
@media(max-width:1050px) {}
@media(max-width:767px) {}
@media(max-width:428px) {}
*/