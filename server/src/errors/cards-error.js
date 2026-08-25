import GameError from "./game-error.js";
class CardRegistryCreationError extends GameError {
    constructor(expectedCount, actualCount) {
        super(`Erro de integridade: Devem haver ${expectedCount} cartas, mas foram registradas ${actualCount} (verifique se há IDs duplicados ou ausentes).`);
        this.name = "CardRegistryCreationError";
        this.expectedCount = expectedCount;
        this.actualCount = actualCount;

    }
}
class CardNotFoundError extends GameError {
    constructor(cardId, cardType) {
        super(`Erro de busca: Não foi encontrada nenhuma carta com ID: ${cardId} nos registros de ${cardType} . Verifique o ID informado`);
        this.name = "CardNotFoundError";
        this.cardId = cardId;
    }
}

export { CardNotFoundError, CardRegistryCreationError}