import enemyCardsData from "../data/cards/enemy-cards-data.js";
import logger from "../utils/logger.js";
import {CardNotFoundError, CardRegistryCreationError} from "../errors/cards-error.js"

class CardRegistry {
  static enemyCards = new Map();

  static initialize() {
      //this.enemyCards.clear()
      enemyCardsData.forEach((card) => {
          if (card && card.id !== undefined) {
              this.enemyCards.set(card.id, card);
          }

    });
      if (this.enemyCards.size !== enemyCardsData.length) {
          logger.error("Erro de registro de cartas de criatura")
          throw new CardRegistryCreationError(
              enemyCardsData.length,
              this.enemyCards.size
          )
      }
    logger.info(
      `Registrado: ${this.enemyCards.size} inimigos na biblioteca de cartas.`,
    );
  }

  static getEnemyCard(id) {
      const card = this.enemyCards.get(id);
    if (!card) {
      logger.error(`Erro de busca de carta de criatura.`);
      throw new CardNotFoundError(id);
    }
    return this.enemyCards.get(id);
  }

  static getAllEnemyCards() {

    logger.info(
      `Recuperado: ${this.enemyCards.size} inimigos da biblioteca de cartas.`,
    );
    return Array.from(this.enemyCards.values());
  }
}

export default CardRegistry;

