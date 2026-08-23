import enemyCardsData from "../data/cards/enemy-cards-data.js";
import logger from "../utils/logger.js";

class CardRegistry {
  static enemyCards = new Map();

  static initialize() {
    enemyCardsData.forEach((card) => {
      this.enemyCards.set(card.id, card);
    });

    logger.info(
      `Registrado: ${this.enemyCards.size} inimigos na biblioteca de cartas.`,
    );
  }

  static getEnemyCard(id) {
    return this.enemyCards.get(id);
  }

  static getAllEnemyCards() {
    return Array.from(this.enemyCards.values());
    logger.info(
      `Recuperado: ${this.enemyCards.size} inimigos da biblioteca de cartas.`,
    );
  }
}

export default CardRegistry;
