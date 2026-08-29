import itemCardsData from "../data/cards/item-cards-data.js";
import logger from "../utils/logger.js";
import {
  CardNotFoundError,
  CardRegistryCreationError,
} from "../errors/cards-error.js";

class ItemCardRegistry {
  static itemCards = new Map();

  static initialize() {
    this.itemCards.clear();

    itemCardsData.forEach((card) => {
      if (card && card.id !== undefined) {
        this.itemCards.set(card.id, card);
      }
    });
    if (this.itemCards.size !== itemCardsData.length) {
      logger.error("Erro de registro de cartas de item");
      throw new CardRegistryCreationError(
        itemCardsData.length,
        this.itemCards.size,
      );
    }
    logger.info(
      `Registrado: ${this.itemCards.size} itens na biblioteca de cartas.`,
    );
  }

  static getItemCard(id) {
    const card = this.itemCards.get(id);
    if (!card) {
      logger.error(`Erro de busca de carta de item.`);
      throw new CardNotFoundError(id);
    }
    return this.itemCards.get(id);
  }

  static getAllItemCards() {
    logger.info(
      `Buscado: ${this.itemCards.size} itens da biblioteca de cartas.`,
    );
    return Array.from(this.itemCards.values());
  }
}

export default ItemCardRegistry;
