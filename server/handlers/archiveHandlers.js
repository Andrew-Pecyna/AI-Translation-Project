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


// Adds new translation to user profile

export const addTranslation = async (request, response) => {
    const client = await getClient();
    
    try {
        await client.connect();
        const db = client.db("translation_db");

        const translationData = request.body
        const randomId = uuidv4()

        const newTranslation = { _id: randomId, ...translationData}
        
        await db.collection("archives").insertOne(newTranslation);

        return response.status(200).json({ status: 200, message: "Translation added to archives collection", data: newTranslation });

    } catch (error) {
        console.log(error.message)
    } finally {
        await client.close();
    }

};


// GET all archived translations of current user

export const getUserTranslations = async (request, response) => {
    const client = await getClient();

    try {
        await client.connect();
        const db = client.db("translation_db");
        const archivesCollection = db.collection("archives");

        let mongoQuery = {};
        if (request.query.user) {
            mongoQuery["user"] = request.params.user;
        }
        
        const userTranslationData = await archivesCollection.find({ user: request.params.user }).toArray();

        userTranslationData ? response.status(200).json({ status: 200, data: userTranslationData }) :
        response.status(404).json({ status: 404, message: "User translation data does not exist", data: undefined })

    } catch (error) {
        console.log(error.message)
    } finally {
        await client.close();
    }

}


// POST - checking if user has an account


export const checkUser = async (request, response) => {
    const client = await getClient();

    try {
        await client.connect();
        const db = client.db("translation_db");

        const formData = request.body
        
        // const { email } = request.params
        
        const userData = await db.collection("users").findOne({ userName: formData.userName });

        userData ? response.status(200).json({ status: 200, data: userData }) :
        response.status(404).json({ status: 404, message: "User does not exist", data: undefined })

    } catch (error) {
        console.log(error.message)
    } finally {
        await client.close();
    }

}