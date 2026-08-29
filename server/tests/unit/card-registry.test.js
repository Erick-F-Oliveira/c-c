import CardRegistry from "../../src/registry/card-registry.js";
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
    CardRegistry.initialize();
    expect(CardRegistry.getAllCreatureCards()).toHaveLength(
      creatureCardsData.length,
    );
  });

  it("deve recuperar uma carta de criatura pelo ID", () => {
    const card = CardRegistry.getCreatureCard(1);
    expect(card).not.toBeUndefined();
  });

  it("deve criar um registro de cartas de itens com sucesso", () => {
    CardRegistry.initialize();
    expect(CardRegistry.getAllItemCards()).toHaveLength(itemCardsData.length);
  });

  it("deve recuperar uma carta de item pelo ID", () => {
    const card = CardRegistry.getItemCard(1);
    expect(card).not.toBeUndefined();
  });
});
//Se falha
describe("CardRegistry - Testes de Falha", () => {
  it("deve lançar CardNotFoundError ao buscar um ID que não existe", () => {
    const idInexistente = 99999;

    expect(() => {
      CardRegistry.getCreatureCard(idInexistente);
    }).toThrow(CardNotFoundError);
  });

  it("deve lançar CardRegistryCreationError ao buscar um ID que não existe", () => {
    expect(() => {
      CardRegistry.initialize();
    }).toThrow(CardRegistryCreationError);
  });
});
