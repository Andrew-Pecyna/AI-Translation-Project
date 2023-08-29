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
height: 75vh;
margin: 50px 0px;
display: flex;
flex-direction: column;
align-items: center;
/* background-color: whitesmoke; */
`

export default LandingPage;