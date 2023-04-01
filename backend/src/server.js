import express from 'express'
import http from 'http'
import Logger from "./utils/Logger.js";
import dotenv from 'dotenv'
import TeamRoutes from './routes/Team.js'

dotenv.config();

const router = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 7000;

const startServer = () => {
    router.use((req, res, next) => {
        Logger.info(`Incoming ===> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`)

        res.on('finish', () => {
            Logger.info(`Incoming ===> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${req.statusCode}]`)
        })

        next()
    })

    router.use(express.urlencoded({ extended: true }))
    router.use(express.json())

    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** ROUTES **/
    router.use('/team', TeamRoutes)

    router.use((req, res, next) => {
        const error = new Error('NOT FOUND')
        Logger.error(error)

        return res.status(404).json({ message: error.message })
    })

    http.createServer(router)
        .listen(PORT, () => Logger.info(`Server is running on port ${PORT}`))
}

startServer()