import styled from 'styled-components';
import UserNav from "../components/UserNav";

const UserHome = () => {

    return (
        <Wrapper>
            <UserNav />
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: blue;
`

export default UserHome;