import styled from "styled-components";
import Navbar from "../components/Navbar";
import Interface from "../components/Interface";
import RegisterSection from "../components/RegisterSection";

const LandingPage = () => {

    return (
        <Container>
            <Navbar />
            <Interface />
            <RegisterSection />
        </Container>
    )
}

const Container = styled.div`
height: 75vh;
margin: 50px 0px;
display: flex;
flex-direction: column;
align-items: center;
`

export default LandingPage;