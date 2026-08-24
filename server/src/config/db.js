import mongoose from "mongoose";
import * as dotenv from "dotenv";
import logger from "../utils/logger.js";

dotenv.config();

const connect = async () => {
  const uri = process.env.MONGODB_URI;

  try {
    await mongoose.connect(uri);
    logger.success("🌿 Conexão com MongoDB estabelecida!");
    return true;
  } catch (error) {
    logger.error(`Erro ao conectar ao MongoDB:\n ${error}`);
    throw error;
  }
};

export default connect;
