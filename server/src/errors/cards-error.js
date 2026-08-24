import GameError from "./game-error.js";
class CardRegistryCreationError extends GameError {
    constructor(expectedCount, actualCount) {
        super(`Erro de integridade: Esperado ${expectedCount} cartas, mas apenas ${actualCount} foram registradas (verifique se há IDs duplicados ou ausentes).`);
        this.name = "CardRegistryCreationError";
        this.expectedCount = expectedCount;
        this.actualCount = actualCount;

    }
}
class CardNotFoundError extends GameError {
    constructor(cardId) {
        super(`Não foi encontrada uma carta com ID ${cardId} nos registros. Verifique o ID informado`);
        this.name = "CardNotFoundError";
        this.cardId = cardId;
    }
}

export { CardNotFoundError, CardRegistryCreationError}