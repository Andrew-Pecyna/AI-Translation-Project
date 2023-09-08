import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();

import router from "./routes/archiveRoutes.js"

app.use(express.json())
app.use(cors());
app.use(router);

const port = process.env.PORT || 3005;

app.get("/", (request, response) => {
    response.send("hello world from our API")
})

app.get("*", (request, response) => {
    return response
    .status(404)
    .json({ status: 404, message: "No endpoint found." });
});

app.post("/generate", async (request, response) => {
    const userText = request.body.userText
    const languageOne = request.body.languageOne
    const languageTwo = request.body.languageTwo
    try {
        const translation = await generate(userText, languageOne, languageTwo)
        response.json({response: translation})
    } catch (error) {
        console.log(error)
        response.status(500).send("Internal Server Error")
    }
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})