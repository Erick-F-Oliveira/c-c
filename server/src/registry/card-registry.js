import creatureCardsData from "../data/cards/creature-cards-data.js";
import itemCardsData from "../data/cards/item-cards-data.js";
import logger from "../utils/logger.js";
import {
  CardNotFoundError,
  CardRegistryCreationError,
} from "../errors/cards-error.js";

class CardRegistry {
  static creatureCards = new Map();
  static itemCards = new Map();

  static initialize() {
    this.creatureCards.clear();
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
    creatureCardsData.forEach((card) => {
      if (card && card.id !== undefined) {
        this.creatureCards.set(card.id, card);
      }
    });
    if (this.creatureCards.size !== creatureCardsData.length) {
      logger.error("Erro de registro de cartas de criatura");
      throw new CardRegistryCreationError(
        creatureCardsData.length,
        this.creatureCards.size,
      );
    }
    logger.info(
      `Registrado: ${this.creatureCards.size} criaturas na biblioteca de cartas.`,
    );
  }

  static getCreatureCard(id) {
    const card = this.creatureCards.get(id);
    if (!card) {
      logger.error(`Erro de busca de carta de criatura.`);
      throw new CardNotFoundError(id);
    }
    return this.creatureCards.get(id);
  }

  static getAllCreatureCards() {
    logger.info(
      `Buscado: ${this.creatureCards.size} criaturas da biblioteca de cartas.`,
    );
    return Array.from(this.creatureCards.values());
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

export default CardRegistry;
