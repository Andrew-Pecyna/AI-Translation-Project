import styled from 'styled-components';

const UserNav = () => {

    return (
        <Container>
            <Div>
                <Span>
                    <Img src="/translate.png"/>
                    <Title>transl(<span style={{color: "orange"}}>ai</span>)te</Title>
                </Span>
                <UserPic>
                    <UserChar>A</UserChar>
                </UserPic>
            </Div>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
background-color: white;
width: 100%;
padding: 40px 0px 50px 0px;
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
    /* background-color: lightblue; */
`

const UserPic = styled.span`
display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;
height: 100px;
width: 100px;
border-radius: 50%;

&:hover{
transform: scale(.97);
}
`

const UserChar = styled.p`
    color: white;
    font-size: 50px;
`

const Img = styled.img`
    width: 75px;
`

const Title = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-weight: lighter;
    font-size: 35px;
`

export default UserNav