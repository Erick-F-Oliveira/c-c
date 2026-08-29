import CreatureCardRegistry from "../../src/registry/creatureCard-registry.js";
import ItemCardRegistry from "../../src/registry/itemCard-registry.js";
import logger from "../../src/utils/logger.js";
import creatureCardsData from "../../src/data/cards/creature-cards-data.js";
import itemCardsData from "../../src/data/cards/item-cards-data.js";
import {
  CardNotFoundError,
  CardRegistryCreationError,
} from "../../src/errors/cards-error.js";
import { jest, describe, it, beforeEach, expect } from "@jest/globals";

describe("Teste de criação de Registro de cartas", () => {
  it("deve criar um registro de cartas de criaturas com sucesso", () => {
    CreatureCardRegistry.initialize();
    expect(CreatureCardRegistry.getAllCreatureCards()).toHaveLength(
      creatureCardsData.length,
    );
  });

  it("deve recuperar uma carta de criatura pelo ID", () => {
    const card = CreatureCardRegistry.getCreatureCard(1);
    expect(card).not.toBeUndefined();
  });

  it("deve criar um registro de cartas de itens com sucesso", () => {
    ItemCardRegistry.initialize();
    expect(ItemCardRegistry.getAllItemCards()).toHaveLength(
      itemCardsData.length,
    );
  });

  it("deve recuperar uma carta de item pelo ID", () => {
    const card = ItemCardRegistry.getItemCard(1);
    expect(card).not.toBeUndefined();
  });
});
//Se falha
describe("CardRegistry - Testes de Falha", () => {
  it("deve lançar CardNotFoundError ao buscar um ID que não existe", () => {
    const idInexistente = 99999;

    expect(() => {
      CreatureCardRegistry.getCreatureCard(idInexistente);
    }).toThrow(CardNotFoundError);
  });

  it("deve lançar CardRegistryCreationError ao buscar um ID que não existe", () => {
    expect(() => {
      CreatureCardRegistry.initialize();
    }).toThrow(CardRegistryCreationError);
  });
});
