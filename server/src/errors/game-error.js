 class GameError extends Error {
    constructor(message) {
        super(message);
        this.name = "GameError";
    }
}

export default GameError