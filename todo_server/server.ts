import { Express } from 'express';
let app: Express = require('express')();
const server = require('http').createServer(app);
const useMiddleware = require('./middleware/useMiddleware');
const delegateRoutesFor = require('./routes/delegateRoutes');
const { connectDB } = require('./config/db/connectDB')
const port = 3001;

useMiddleware(app);
delegateRoutesFor(app);

const init = async () => {
    try{
        const client = await connectDB()
        if(client){
            console.log("Connected to database")

            client.release()
        }
    }catch (e) {
        console.error("Database init failed")
    }
}

init()


server.listen(port, () => console.log(`Server is listening on port ${port}`));
