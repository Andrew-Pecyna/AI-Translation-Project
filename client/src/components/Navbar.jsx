import styled from 'styled-components';
import LoginButton from "./LoginButton"

const Navbar = () => {

    return (
        <Container>
            <Div>
                <Span>
                    <Img src="/translate.png"/>
                    <Title>transl<StyledSpan>ai</StyledSpan>te</Title>
                </Span>
                <LoginButton />
            </Div>
        </Container>
    )
}

const StyledSpan = styled.span`
background-color: orange;
padding: 5px 0px;
margin: 0px 2px;
border: 2px solid black;
`

const Container = styled.div`
display: flex;
justify-content: center;
background-color: white;
width: 100%;
padding: 0px 0px 50px 0px;
`

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
`

const Span = styled.span`
    display: flex;
    align-items: center;
    gap: 15px;
`

const Img = styled.img`
    width: 75px;
`

const Title = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-weight: lighter;
    font-size: 35px;
`

export default Navbar