import styled from 'styled-components';
import { useState } from 'react';

const Interface = () => {

    const [userText, setUserText] = useState("")
    const [aiTranslation, setAiTranslation] = useState("")
    const [languageOne, setLanguageOne] = useState("English")
    const [languageTwo, setLanguageTwo] = useState("French")

    const submitForm = async (e) => {
        e.preventDefault()
    
        const translation = await generateTranslation()
        setAiTranslation(translation.response)
        console.log("returned from server: ", translation.response + languageOne + languageTwo)
    }

    const generateTranslation = async () => {
        const response = await fetch("http://localhost:3005/generate", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ 
                userText: userText,
                languageOne: languageOne,
                languageTwo: languageTwo
            })
        })

    const data = await response.json()
        return data
    }

    const handleChange = (e) => {
        if (e.target.name === "language-one") {
            setLanguageOne(e.target.value);
        } else if (e.target.name === "language-two") {
            setLanguageTwo(e.target.value)
        }
    };

    return (
        <Form onSubmit={submitForm}>
            <InputsBox>
                <Languages>
                    <Select name="language-one" onChange={handleChange}>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                        <option value="italian">Italian</option>
                    </Select>
                    <img style={{width: "40px"}} src="/right-arrow.png"/>
                    <Select name="language-two" onChange={handleChange}>
                        <option value="french">French</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="italian">Italian</option>
                    </Select>
                    <Submit type="submit" value=">" />
                </Languages>
                <TextBoxes>
                    <InputBox
                    name="user-text"
                    placeholder="Type to translate"
                    onChange={(e) => setUserText(e.target.value)}
                    />
                    <OutputBox value={aiTranslation} disabled>
                    </OutputBox>
                </TextBoxes>
                <br></br>
                {/* <Submit type="submit" value=">" /> */}
            </InputsBox>
        </Form>
        
    )
}

const Form = styled.form`
width: 70%;
min-width: 700px;
`

const InputsBox = styled.div`
display: flex;
flex-direction: column;
background-color: white;
/* border: 1px solid black; */
/* border-radius: 5px; */
`

const Languages = styled.div`
/* background-color: white; */
padding: 10px 0px 20px 0px;
display: flex;
justify-content: center;
gap: 17%;

@media (max-width: 950px) {
    gap: 10%;
}
`

const Select = styled.select`
    font-size: 20px;
    border: none;
`

const TextBoxes = styled.div`
    display: flex;
    gap: 0.5px;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
}
`

const InputBox = styled.textarea`
    width: 50%;
    height: 200px;
    resize: none;
    border: 2px solid cornflowerblue;
    font-size: 18px;
    padding: 5px;

    @media (max-width: 768px) {
    width: 500px;
}
`

const OutputBox = styled.textarea`
    width: 50%;
    height: 200px;
    background-color: whitesmoke;
    resize: none;
    border: 2px solid lightgrey;
    font-size: 18px;
    padding: 5px;

    @media (max-width: 768px) {
    width: 500px;
}
`

const Submit = styled.input`
    font-size: 30px;
    min-width: 70px;
    background-color: dodgerblue;
    color: white;
    border: none;

    &:hover {
    background-color: cornflowerblue; 
    }
`

// const Output = styled.div`
//     background-color: whitesmoke;
//     width: 50%;
//     height: 100px;
// `

export default Interface;