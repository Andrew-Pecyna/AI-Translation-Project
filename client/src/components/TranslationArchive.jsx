import styled from 'styled-components';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import SingleTranslation from './SingleTranslation';

const TranslationArchive = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const [userTranslations, setUserTranslations] = useState(undefined)

    useEffect(() => {
        const getUserTranslations = async () => {
            try{
                const translationResponse = await fetch(`http://localhost:3005/api/get-translations/${currentUser.userName}`, { method: "GET" });
                const parsedData = await translationResponse.json();
                const translationData = parsedData.data
                const recentOrder = translationData.reverse()

                setUserTranslations(recentOrder)

            } catch (error) {
                console.log(error)
            }
        }
        getUserTranslations()

    }, [])

    console.log(userTranslations)

    return (
        !userTranslations ? <p>loading...</p>
        :<Wrapper>
            <TagDiv>
                <TagSpan>Recent</TagSpan>
            </TagDiv>
            <SingleTranslation translationData={userTranslations}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 65%;
min-width: 500px;
`

const TagSpan = styled.span`
font-family: Arial, Helvetica, sans-serif;
background-color: cornflowerblue;
padding: 5px 15px;
color: white;
border-radius: 2px;
`

const TagDiv = styled.div`
margin: 15px 0px;
`

export default TranslationArchive;