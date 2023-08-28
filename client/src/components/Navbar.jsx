import styled from 'styled-components';
import LoginButton from "./LoginButton"

const Navbar = () => {

    return (
        <Container>
            <Div>
                <h1>OpenAI Language Translator</h1>
                <LoginButton />
            </Div>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
background-color: aliceblue;
width: 100%;
`

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
`

export default Navbar