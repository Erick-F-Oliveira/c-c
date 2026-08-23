import CardRegistry from "../src/registry/card-registry.js";
import logger from "../src/utils/logger.js"; // Importe o logger normalmente
import enemyCardsData from "../src/data/cards/enemy-cards-data.js";
import { jest, describe, it, beforeEach, expect } from "@jest/globals";

describe("Teste de criação de Registro de cartas", () => {
  it("deve criar um registro de cartas com sucesso", () => {
    CardRegistry.initialize();
    expect(CardRegistry.getAllEnemyCards()).toHaveLength(enemyCardsData.length);
  });

  it("deve recuperar uma carta de inimigo pelo ID", () => {
    const card = CardRegistry.getEnemyCard(1);
    expect(card).not.toBeUndefined();
  });
});
