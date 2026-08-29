import magicCardsData from "../data/cards/magic-cards-data.js";
import logger from "../utils/logger.js";
import {
  CardNotFoundError,
  CardRegistryCreationError,
} from "../errors/cards-error.js";

class MagicCardRegistry {
  static magicCards = new Map();

  static initialize() {
    this.magicCards.clear();

    magicCardsData.forEach((card) => {
      if (card && card.id !== undefined) {
        this.magicCards.set(card.id, card);
      }
    });
    if (this.magicCards.size !== magicCardsData.length) {
      logger.error("Erro de registro de cartas de magia");
      throw new CardRegistryCreationError(
        magicCardsData.length,
        this.magicCards.size,
      );
    }
    logger.info(
      `Registrado: ${this.magicCards.size} cartas de magia na biblioteca de cartas.`,
    );
  }

  static getMagicCard(id) {
    const card = this.magicCards.get(id);
    if (!card) {
      logger.error(`Erro de busca de carta de magia.`);
      throw new CardNotFoundError(id);
    }
    return this.magicCards.get(id);
  }

  static getAllmagicCards() {
    logger.info(
      `Buscado: ${this.magicCards.size} cartas de magia da biblioteca de cartas.`,
    );
    return Array.from(this.magicCards.values());
  }
}

export default MagicCardRegistry;
