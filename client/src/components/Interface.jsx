import styled from 'styled-components';
import { CiBookmark } from "react-icons/ci";
import { GoBookmarkFill } from "react-icons/go";
import { useState, useContext } from 'react';
// import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext";

const Interface = () => {

    const [userText, setUserText] = useState("")
    const [tagText, setTagText] = useState("")
    const [aiTranslation, setAiTranslation] = useState("")
    const [languageOne, setLanguageOne] = useState("English")
    const [languageTwo, setLanguageTwo] = useState("French")
    const [saveSwitch, setSaveSwitch] = useState(false)
    const [tagSwitch, setTagSwitch] = useState(false)
    const {currentUser, setCurrentUser} = useContext(UserContext)
    // const navigate = useNavigate();

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

    const handleSave = async (e) => {
        e.preventDefault()

        try {
            const translationPostRes = await fetch(`http://localhost:3005/api/post-translation`,
                {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user: currentUser.userName,
                    input: userText,
                    translation: aiTranslation,
                    source: languageOne,
                    target: languageTwo,
                    tag: tagText
                })
                })
                const data = await translationPostRes.json();
                if (data.status === 200) {
                    console.log(data.message)
                    setSaveSwitch(true)
                    setTagSwitch(false)
                    // setAiTranslation("")
                    // setUserText("")
                    // resetting interface ^^
                }
        } catch (error) {
            console.log(error)
        }

    }

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
                    <OutputBox>
                        <span>{aiTranslation}</span>
                    </OutputBox>
                    <StyledIcon onClick={() => setTagSwitch(!tagSwitch)}>
                        {saveSwitch ? <GoBookmarkFill /> : <CiBookmark />}
                    </StyledIcon>
                </TextBoxes>
                <br></br>
                <TagBox>
                    {tagSwitch && <TagForm onSubmit={handleSave}>
                        <input type="text" name="tag" placeholder="Optional tag" onChange={(e) => setTagText(e.target.value)}/>
                        <button onClick={handleSave}>save</button>
                    </TagForm>}
                </TagBox>
            </InputsBox>
        </Form>
        
    )
}

const TagForm = styled.form`
display: flex;
gap: 5px;
padding: 10px;
background-color: #F3F8FC;
border: 2px solid gainsboro;
`

const TagBox = styled.div`
align-self: flex-end;
margin-right: 25px;

@media (max-width: 768px) {
margin-right: 95px;
margin-top: -25px;
}
`

const StyledIcon = styled.span`
font-size: 22px;
height: 25px;
position: relative;
right: 23px;
top: 188px;
color: gray;

&:hover {
    color: dodgerblue;
}


@media (max-width: 768px) {
    right: -245px;
    top: -25px;
}
`

const Form = styled.form`
width: 70%;
min-width: 700px;
`

const InputsBox = styled.div`
display: flex;
flex-direction: column;
background-color: white;
`

const Languages = styled.div`
padding: 10px 0px 20px 0px;
display: flex;
justify-content: center;
gap: 17%;

@media (max-width: 768px) {
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
    font-family: 'Courier New', Courier, monospace;
    border: 2px solid cornflowerblue;
    font-size: 18px;
    padding: 5px;

    @media (max-width: 768px) {
    width: 500px;
}
`

const OutputBox = styled.div`
    width: 50%;
    height: 200px;
    font-family: 'Courier New', Courier, monospace;
    background-color: whitesmoke;
    resize: none;
    border: 2px solid lightgrey;
    font-size: 18px;
    padding: 5px;
    overflow: scroll;

    @media (max-width: 768px) {
    width: 500px;
}
`

const Submit = styled.input`
    font-size: 30px;
    min-width: 70px;
    /* background-color: dodgerblue; */
    background-color: gray;
    color: white;
    border: none;

    &:hover {
    background-color: #1F51FF; 
    }
`

export default Interface;