import creatureCardsData from "../data/cards/creature-cards-data.js";
import logger from "../utils/logger.js";
import {CardNotFoundError, CardRegistryCreationError} from "../errors/cards-error.js"

class CardRegistry {
  static creatureCards = new Map();

  static initialize() {
      //this.creatureCards.clear()
      creatureCardsData.forEach((card) => {
          if (card && card.id !== undefined) {
              this.creatureCards.set(card.id, card);
          }

    });
      if (this.creatureCards.size !== creatureCardsData.length) {
          logger.error("Erro de registro de cartas de criatura")
          throw new CardRegistryCreationError(
              creatureCardsData.length,
              this.creatureCards.size
          )
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

  static getAllEnemyCards() {

    logger.info(
      `Buscado: ${this.creatureCards.size} criaturas da biblioteca de cartas.`,
    );
    return Array.from(this.creatureCards.values());
  }
}

export default CardRegistry;

