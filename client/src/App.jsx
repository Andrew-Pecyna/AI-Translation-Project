import { styled } from "styled-components"
import { useState } from "react"

function App() {

  const [userText, setUserText] = useState("")

  const submitForm = (e) => {
    e.preventDefault()
    console.log("submit", userText)
  }

  return (
    <Container>
      <h1>Translate text with Open AI</h1>
      <form onSubmit={submitForm}>
        <InputsBox>
          <textarea
          name="user-text"
          placeholder="Enter text here"
          onChange={(e) => setUserText(e.target.value)}
          />
          <br></br>
          <input type="submit" value="Generate translation" />
        </InputsBox>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
`

export default App
