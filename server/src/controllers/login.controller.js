import logger from "../utils/logger.js"
import {io} from "../../server.js"
import setupSockets from "../sockets/index.js"
const loginController = async (req, res) =>{
    try {
        setupSockets(io)
        res.status(200).json({
            message: setupSockets.so
        })
    }catch (e){
        logger.error("Erro no login:\n", e)
        res.status(404).json(
            {
                message: "Erro ao efetuar login"
            }
        )
    }
}