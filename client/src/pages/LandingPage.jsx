import styled from "styled-components";
import { useState } from "react";

const LandingPage = () => {

    const [userText, setUserText] = useState("")
    const [aiTranslation, setAiTranslation] = useState("")

    const submitForm = async (e) => {
        e.preventDefault()
    
        const translation = await generateTranslation()
        setAiTranslation(translation.response)
        console.log("returned from server: ", translation.response)
    }

    const generateTranslation = async () => {
        const response = await fetch("http://localhost:3005/generate", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ userText: userText })
        })

    const data = await response.json()
        return data
    }

    return (
        <Container>
            <h1>Translate text with Open AI</h1>
            <Form onSubmit={submitForm}>
                <InputsBox>
                    <TextBoxes>
                        <InputBox
                        name="user-text"
                        placeholder="Type to translate"
                        onChange={(e) => setUserText(e.target.value)}
                        />
                        <Output>
                            <p>{aiTranslation}</p>
                        </Output>
                    </TextBoxes>
                    <br></br>
                    <input type="submit" value="Generate translation" />
                </InputsBox>
            </Form>
    </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Form = styled.form`
width: 50%;
min-width: 600px;
`

const InputsBox = styled.div`
display: flex;
flex-direction: column;
`

const TextBoxes = styled.div`
    display: flex;
    gap: 10px;
`

const InputBox = styled.textarea`
    width: 50%;
    height: 95px;
`

const Output = styled.div`
    background-color: whitesmoke;
    width: 50%;
    height: 100px;
`

export default LandingPage;