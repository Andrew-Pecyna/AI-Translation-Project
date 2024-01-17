import styled from 'styled-components';

const SingleTranslation = ({currentTag, translationData}) => {

    return (
        <>
            {translationData.map((each) => {
                if (each.tag != undefined && each.tag === currentTag) {
                    return (
                        <SpanBox key={each._id}>
                            <p><FontSpan>{each.source}: </FontSpan>{each.input}</p>
                            <p><FontSpan>{each.target}: </FontSpan>{each.translation}</p>
                        </SpanBox>
                        )
                } else if (currentTag === "Recent") {
                    return (
                        <SpanBox key={each._id}>
                            <p><FontSpan>{each.source}: </FontSpan>{each.input}</p>
                            <p><FontSpan>{each.target}: </FontSpan>{each.translation}</p>
                        </SpanBox>
                        )
                }
            })}
        </>
    )
}


const SpanBox = styled.div`
/* border: 2px solid whitesmoke; */
background-color: whitesmoke  ;
margin-top: 2px;
font-family: Arial, Helvetica, sans-serif;
padding: 0px 10px;

&:hover {
background-color: #F3F8FC;
}
`

const FontSpan = styled.span`
color: #7F8080;
padding-right: 3px;
`

export default SingleTranslation;