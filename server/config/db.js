const mongoose = require('mongoose')
require('dotenv').config({ path: './envFiles/.env' });

const connectToDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.userKey}@cluster0.i9wanvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Connected To MongoDB")
    }
    catch (error) {
        console.log("Failed to Connect", error)
    }
}

module.exports = connectToDB 