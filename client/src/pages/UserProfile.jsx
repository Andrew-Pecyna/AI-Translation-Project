import styled from 'styled-components';
import UserNav from "../components/UserNav";
import TranslationArchive from '../components/TranslationArchive';

const UserHome = () => {

    return (
        <Wrapper>
            <UserNav />
            <TranslationArchive />
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