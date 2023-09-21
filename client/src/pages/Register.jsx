import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    const {currentUser, setCurrentUser} = useContext(UserContext)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.id]: event.target.value}) 
    }

    const validatePassword = (event) => {
        const password = document.getElementById("password")
        const confirm = document.getElementById("retype")
        console.log(password.value + " " + confirm.value)

        if (password.value != confirm.value) {
            confirm.setCustomValidity("Passwords Don't Match")
        } else {
            confirm.setCustomValidity('')
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formObject = { ...formData }

            const newUserResponse = await fetch(`http://localhost:3005/api/post-user`,
                {   
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formObject)
                })
                const data = await newUserResponse.json();
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
            <FormBox onSubmit={handleSubmit}>
                <Form>
                    <Span>
                        <Img src="/translate.png"/>
                        <Title>transl<StyledSpan>ai</StyledSpan>te</Title>
                    </Span>
                    <FormContents>
                        <span>
                            <Input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} required></Input>
                        </span>
                        <span>
                            <Input type="text" id="userName" name="userName" placeholder="User Name" onChange={handleChange} required></Input>
                        </span>
                        <span>
                            <Input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} required></Input>
                        </span>
                        <span>
                            <Input type="password" id="retype" name="retype" placeholder="Retype Password" onChange={validatePassword} required></Input>
                        </span>
                        <span>
                            <Btn type="submit">Sign up</Btn>
                        </span>
                    </FormContents>
                </Form>
            </FormBox>
            <SignUpBox>
                <span>Already have an account? <StyledNav to="/login">Log in</StyledNav></span>
            </SignUpBox>
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
width: 238px;
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
padding: 25px 84px;
font-size: 18px;
`

const StyledNav = styled(NavLink)`
text-decoration: none;
color: dodgerblue;
font-weight: bold;
`

export default Register;