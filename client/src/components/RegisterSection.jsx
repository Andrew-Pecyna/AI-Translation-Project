import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RegisterSection = () => {
    const navigate = useNavigate()

    return (
        <Wrapper>
            <ContentWrapper>
                <NewSpan>NEW</NewSpan>
                <Subtitle>Take your language learning to the next level.</Subtitle>
                <span>
                    <StyledP>◦ Save translations ◦ Archive by category ◦ Easy reference</StyledP>
                </span>
                <BtnSpan onClick={() => navigate("/register")}>
                    <StyledBtn>Create Account</StyledBtn>
                </BtnSpan>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
background-color: lavender;
margin-top: 25px;
border-radius: 5px;
width: 50%;
min-width: 700px;

@media (max-width: 1100px) {
    min-width: 600px;
}

@media (max-width: 768px) {
    min-width: 512px;
}
`

const ContentWrapper = styled.div`
padding: 30px 30px 20px 30px;
font-family: Helvetica;
font-weight: lighter;
`

const Subtitle = styled.p`
font-size: 26px;
margin-top: 20px;
`

const NewSpan = styled.span`
background-color: blueviolet;
color: white;
font-size: 13px;
font-weight: bold;
padding: 4px;
border-radius: 3px;
`

const StyledP = styled.p`
font-size: 18px;
text-align: center;
`

const BtnSpan = styled.span`
display: flex;
justify-content: center;
padding: 20px 0px;
`

const StyledBtn = styled.button`
padding: 10px 30px;
font-size: 20px;
font-weight: bolder;
background-color: mediumpurple;
color: white;
border: none;

&:hover {
background-color: blueviolet;
}

&:active {
transform: scale(.99);
}
`

export default RegisterSection;