import { jest, describe, it, beforeEach, expect } from '@jest/globals';
import mongoose from "mongoose";
import connect from "../src/config/db.js"; // Ajuste o caminho se necessário
import logger from "../src/utils/logger.js"; // Importe o logger normalmente

describe("Conexão com o Banco de Dados", () => {

    beforeEach(() => {
        jest.clearAllMocks();
        process.env.MONGODB_URI = "mongodb://localhost:27017/teste_db";
    });

    it("deve conectar com sucesso e retornar true", async () => {
        // 1. Espiona o método 'success' do logger e impede que ele execute de verdade
        const loggerSuccessSpy = jest.spyOn(logger, "success").mockImplementation(() => {});

        // 2. Espiona o mongoose.connect e força o sucesso
        const mockConnect = jest.spyOn(mongoose, "connect").mockResolvedValue({});

        const resultado = await connect();

        expect(resultado).toBe(true);
        expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGODB_URI);
        expect(loggerSuccessSpy).toHaveBeenCalledWith("🌿 Conexão com MongoDB estabelecida! ✔");

        // Limpa os spies
        mockConnect.mockRestore();
        loggerSuccessSpy.mockRestore();
    });

    it("deve lançar um erro e registrar no logger se a conexão falhar", async () => {
        const erroSimulado = new Error("Senha incorreta ou rede indisponível");

        // 1. Espiona o método 'error' do logger
        const loggerErrorSpy = jest.spyOn(logger, "error").mockImplementation(() => {});

        // 2. Força o mongoose.connect a falhar
        const mockConnect = jest.spyOn(mongoose, "connect").mockRejectedValue(erroSimulado);

        await expect(connect()).rejects.toThrow("Senha incorreta ou rede indisponível");

        expect(loggerErrorSpy).toHaveBeenCalledWith(
            expect.stringContaining("Erro ao conectar ao MongoDB:")
        );

        mockConnect.mockRestore();
        loggerErrorSpy.mockRestore();
    });
});