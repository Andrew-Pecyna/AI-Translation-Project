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
height: 95vh;
margin: 50px 0px;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 768px) {
margin-bottom: 250px;
}
`

export default LandingPage;