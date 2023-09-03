import styled from 'styled-components';
import UserNav from "../components/UserNav";
import Interface from '../components/Interface';

const UserHome = () => {

    return (
        <Wrapper>
            <UserNav />
            <Interface />
        </Wrapper>
    )
}

const Wrapper = styled.div`
/* background-color: blue; */
height: 75vh;
margin: 50px 0px;
display: flex;
flex-direction: column;
align-items: center;
`

export default UserHome;