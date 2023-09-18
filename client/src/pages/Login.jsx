import styled from "styled-components";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    const {currentUser, setCurrentUser} = useContext(UserContext)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.id]: event.target.value}) 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formObject = { ...formData }

            const UserResponse = await fetch(`http://localhost:3005/api/check-user`,
                {   
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formObject)
                })
                const data = await UserResponse.json();
                if (data.status === 200) {
                    window.sessionStorage.setItem("currentUser", JSON.stringify(data.data))
                    setCurrentUser(data.data)
                    console.log(data.data)
                    navigate('/userhome')
                }
            } catch (error) {
                console.log(error)
            }

    }

    return (
        <Container>
            <FormBox>
                <Form onSubmit={handleSubmit}>
                    <Span>
                        <Img src="/translate.png"/>
                        <Title>transl(<span style={{color: "orange"}}>ai</span>)te</Title>
                    </Span>
                    <FormContents>
                        <span>
                            <Input type="text" id="userName" name="userName" placeholder="User Name" onChange={handleChange} required></Input>
                        </span>
                        <span>
                            <Input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} required></Input>
                        </span>
                        <span>
                            <Btn type="submit">Log in</Btn>
                        </span>
                    </FormContents>
                </Form>
            </FormBox>
            <SignUpBox>
                <span>Dont have an account? <StyledNav to="/register">Sign Up</StyledNav></span>
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

&:hover {
background-color: blue;
}

&:active {
transform: scale(0.99)
}
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