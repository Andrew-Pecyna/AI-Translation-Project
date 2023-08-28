import styled from "styled-components";
import Navbar from "../components/Navbar";
import Interface from "../components/Interface";

const LandingPage = () => {

    return (
        <Container>
            <Navbar />
            <Interface />
    </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: lightyellow;
`

export default LandingPage;