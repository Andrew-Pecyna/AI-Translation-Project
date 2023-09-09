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
height: 75vh;
display: flex;
flex-direction: column;
align-items: center;
`

export default UserHome;