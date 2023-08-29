import openai from "./api.js"

const generate = async(userText, languageOne, languageTwo) => {

    const chatGptApi = async (userText, languageOne, languageTwo) => {
        const messages = [
            {role: "system", content: `You are an expert translator.`},
            {role: "user", content: `Translate the following text from English into French using the style, vocabulary, and expressions of a native French speaker: \n\nThe Salinas valley is in Northern California. It is a long narrow swale between two ranges of mountains, and the Salinas River winds and twists up the center until it falls at last into Monterey Bay.`},
            {role: "assistant", content: `La vallée de Salinas se trouve en Californie du Nord. C'est une longue dépression étroite située entre deux chaînes de montagnes, et la rivière de Salinas serpente et tournoie au centre jusqu'à ce qu'elle se jette finalement dans la baie de Monterey.`},
            {role: "user", content: `Translate the following text from ${languageOne} into ${languageTwo} using the style, vocabulary, and expressions of a native ${languageTwo} speaker: \n\n${userText}.`}
        ];

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
        })
        return response.choices[0].message.content
    }

    return await chatGptApi(userText, languageOne, languageTwo)

}

export default generate;