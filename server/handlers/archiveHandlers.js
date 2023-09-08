import dotenv from "dotenv";
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

import mongodb from 'mongodb'
const { MongoClient } = mongodb
const { MONGO_URI } = process.env;

const getClient = async () => {
    const client = new MongoClient(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return client;
}

// Endpoint handlers below


// ADDS new user to collection

export const addUser = async (request, response) => {
    const client = await getClient();
    
    try {
        await client.connect();
        const db = client.db("translation_db");

        const formData = request.body
        const randomId = uuidv4()

        const newUser = {
            _id: randomId,
            email: formData.email,
            userName: formData.userName,
            password: formData.password
        }
        
        await db.collection("users").insertOne(newUser);

        return response.status(200).json({ status: 200, message: "Account Created", data: newUser });

    } catch (error) {
        console.log(error.message)
    } finally {
        await client.close();
    }

};


