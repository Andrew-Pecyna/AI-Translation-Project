import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (request, response) => {
    response.send("hello world from our API")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})