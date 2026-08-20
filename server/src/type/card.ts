import { ElementType } from "../enums/elements";
import { CreatureClass } from "../enums/creature-classes";
import { CardType } from "../enums/card-types";
import { ItemSubtype, MagicSubtype } from "../enums/card-subtypes";

// ============================================
// TIPO BASE - Comum a todas as cartas
// ============================================
export interface CardData {
  id: number;
  name: string;
  type: CardType; // 'enemy' | 'item' | 'magic'
  description: string; // Texto para o jogador ler (UI)
  abilityId?: string; // Referência à habilidade (opcional)
}

// ============================================
// CARTAS DE INIMIGO
// ============================================
export interface EnemyCardData extends CardData {
  type: CardType.ENEMY;
  creatureClass: CreatureClass;
  element: ElementType;
  hp: number;
  attack: number;
  defense: number;

  // Atributos especiais (opcionais)
  influenceZone?: number; // Zona de influência (ex: Dragão da poeira = 3)
  damageDice?: string; // Formato dos dados de dano (ex: "2d8", "1d10")
  movementDice?: string; // Formato dos dados de movimento
}

// ============================================
// CARTAS DE ITEM
// ============================================
export interface ItemCardData extends CardData {
  type: CardType.ITEM;
  subtype: ItemSubtype; // 'instant' | 'durable' | 'equippable'

  // Atributos específicos de itens
  cost?: number; // Custo em PMs para ativar
  maintenanceCost?: number; // Custo por rodada (para duráveis)

  // Para itens equipáveis
  allowedClasses?: CreatureClass[]; // Classes que podem equipar
  allowedElements?: ElementType[]; // Elementos que podem equipar

  // Para itens com efeitos de atributos
  attackBonus?: number;
  defenseBonus?: number;
  hpBonus?: number;
  damageDice?: string; // Muda o dado de dano (ex: Lâmina de Baldencur = 1d12)
}

// ============================================
// CARTAS DE MAGIA
// ============================================
export interface MagicCardData extends CardData {
  type: CardType.MAGIC;
  subtype: MagicSubtype; // 'instant' | 'durable' | 'response'

  // Atributos específicos de magias
  cost?: number; // Custo em PMs
  maintenanceCost?: number; // Custo por rodada (para duráveis)

  // Requisitos de ativação
  requiredClass?: CreatureClass; // Classe necessária para ativar
  requiredElement?: ElementType; // Elemento necessário
  minCrystals?: number; // Mínimo de cristais necessários

  // Alcance/área
  range?: number; // Alcance em casas
  areaOfEffect?: number; // Área de efeito (ex: 2x2, 3x3)
}

// ============================================
// TIPOS AUXILIARES ÚTEIS
// ============================================

// Posição no tabuleiro
export interface Position {
  x: number;
  y: number;
}

// Status effects (queimadura, congelamento, etc)
export interface StatusEffect {
  type: "burning" | "frozen" | "stunned" | "poisoned";
  duration: number; // Rodadas restantes
  damagePerTurn?: number; // Dano por rodada (para queimadura/veneno)
  source?: string; // ID da carta que causou o efeito
}

// Contadores (Contador de Trevas, Contador de Tesouro, etc)
export interface Counter {
  type: string; // Ex: 'darkness', 'treasure', 'sculpture'
  amount: number;
  maxAmount?: number; // Limite máximo (ex: Espada de Garetsco = 10)
}

// Instância de uma carta em jogo (com estado dinâmico)
export interface CardInstance {
  cardData: CardData; // Referência aos dados estáticos
  instanceId: string; // ID único desta instância específica
  position?: Position; // Posição no tabuleiro
  currentHp?: number; // HP atual (para inimigos)
  statusEffects: StatusEffect[];
  counters: Counter[];
  equippedCards?: string[]; // IDs de instâncias de cartas equipadas
  ownerId: string; // ID do jogador que controla esta carta
  isFaceDown?: boolean; // Se está virada para baixo
}
