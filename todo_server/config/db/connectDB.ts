import pool from "./db"

const connectDB = async () => {
    let client;
    try{
        client = await pool.connect()
        console.log("connected to DB")
        return client;
    }catch (e) {
        console.error("error acquiring client", e.stack)
        return null
    }
}

module.exports = { connectDB }
