import styled from 'styled-components';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import SingleTranslation from './SingleTranslation';

const TranslationArchive = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const [userTranslations, setUserTranslations] = useState(undefined)
    const [tagKeys, setTagKeys] = useState("")
    const [currentTag, setCurrentTag] = useState("Recent")


    useEffect(() => {
        const getUserTranslations = async () => {
            try{
                const translationResponse = await fetch(`http://localhost:3005/api/get-translations/${currentUser.userName}`, { method: "GET" });
                const parsedData = await translationResponse.json();
                const translationData = parsedData.data
                const recentOrder = translationData.reverse()

                setUserTranslations(recentOrder)
                const unique = [...new Set(recentOrder.map(item => item.tag))]
                setTagKeys(unique)

            } catch (error) {
                console.log(error)
            }
        }
        getUserTranslations()

    }, [])

    console.log(currentTag)
    

    return (
        !userTranslations ? <p>loading...</p>
        :<Wrapper>
            <TagDiv>
                <TagSpan style={{backgroundColor : currentTag === "Recent" ? "#BBD1F4" : "#F3F8FC"}} onClick={() => setCurrentTag("Recent")}>Recent</TagSpan>
                {tagKeys.map((each) => {
                    if (each != undefined && each != "") {
                        console.log(each)
                        return <TagSpan style={{backgroundColor : each === currentTag ? "#BBD1F4" : "#F3F8FC"}} onClick={() => setCurrentTag(each)} key={each}>{each}</TagSpan>
                    }
                })}
            </TagDiv>
            <SingleTranslation currentTag={currentTag} translationData={userTranslations}/>
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
background-color: #F3F8FC;
padding: 5px 15px;
margin-right: 5px;
margin-bottom: 5px;
color: gray;
border-radius: 2px;
`

const TagDiv = styled.div`
margin: 10px 0px;
display: flex;
flex-wrap: wrap ;

`

export default TranslationArchive;