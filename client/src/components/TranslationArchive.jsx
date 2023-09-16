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
export default TranslationArchive;