import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (request, response) => {
    response.send("hello world from our API")
})

app.post("/generate", async (request, response) => {
    const userText = request.body.userText
    try {
        const translation = await generate(userText)
        response.json({response: translation})
    } catch (error) {
        console.log(error)
        response.status(500).send("Internal Server Error")
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})