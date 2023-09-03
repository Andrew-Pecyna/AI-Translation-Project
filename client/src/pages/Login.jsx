import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Login = () => {

    return (
        <Container>
            <FormBox>
                <Form>
                    <Span>
                        <Img src="/translate.png"/>
                        <Title>transl(<span style={{color: "orange"}}>ai</span>)te</Title>
                    </Span>
                    <FormContents>
                        <span>
                            <Input type="text" id="userName" name="userName" placeholder="User Name"></Input>
                        </span>
                        <span>
                            <Input type="password" id="password" name="password" placeholder="Password"></Input>
                        </span>
                        <span>
                            <Btn type="submit">Log in</Btn>
                        </span>
                    </FormContents>
                </Form>
            </FormBox>
            <SignUpBox>
                <span>Dont have an account? <StyledNav to="/">Sign Up</StyledNav></span>
            </SignUpBox>
        </Container>
    )
}

const Container = styled.div`
height: 75vh;
margin: 50px 0px;
display: flex;
flex-direction: column;
align-items: center;
/* background-color: lightblue; */
`

const Span = styled.span`
display: flex;
align-items: center;
gap: 15px;
margin-bottom: 60px;
margin-top: 10px;
`

const Img = styled.img`
width: 75px;
`

const Title = styled.h1`
font-family: 'Courier New', Courier, monospace;
font-weight: lighter;
font-size: 35px;
`

const FormBox = styled.div`
background-color: white;
border: 1px solid gainsboro;
padding: 50px 50px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`

const FormContents = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`

const Input = styled.input`
width: 230px;
height: 30px;
font-size: 16px;
`

const Btn = styled.button`
width: 237px;
height: 40px;
margin-top: 10px;
background-color: dodgerblue;
color: white;
border: none;
border-radius: 5px;
font-size: 18px;
`

const SignUpBox = styled.div`
border: 1px solid gainsboro;
margin-top: 20px;
padding: 25px 106px;
font-size: 18px;
`

const StyledNav = styled(NavLink)`
text-decoration: none;
color: dodgerblue;
font-weight: bold;
`

export default Login;