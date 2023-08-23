import { styled } from "styled-components"

function App() {

  return (
    <Container>
      <h1>Translate text with Open AI</h1>
      <form>
        <InputsBox>
          <input
          type="text"
          name="user-text"
          placeholder="Enter text here"
          />
          <br></br>
          <input type="text" value="Generate translation" />
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
