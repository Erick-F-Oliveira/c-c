const EffectType = {
    // ========== DANO ==========
    DAMAGE: "Dano",                    // Causa dano direto (Ex: Extintor de incêndio - 30 de dano)
    DAMAGE_OVER_TIME: "Dano ao longo do tempo", // Dano contínuo (Ex: Dragão de Fogo - queimando 1d6 por rodada)
    DAMAGE_REDUCTION: "Redução de dano", // Reduz dano recebido (Ex: Dragão da Poeira - sofre metade do dano)

    // ========== CURA ==========
    HEAL: "Cura",                      // Recupera PVs (Ex: Poções de cura)
    HEAL_TOTAL: "Cura total",            // Cura completa (Ex: Soro de reidratação oral)

    // ========== BUFF/DEBUFF ==========
    STAT_BOOST: "Aumento de atributos",  // Aumenta Atq/Def/PVs (Ex: Glaive de Henos - multiplica atributos)
    STAT_REDUCTION: "Redução de atributos", // Reduz atributos (Ex: Máquina de chuva - Fogo -4 de dano)
    DAMAGE_BUFF: "Aumento de dano",     // Aumenta dano específico (Ex: Estandarte de guerra - +3 de dano)
    DAMAGE_DEBUFF: "Diminui dano",    // Diminui o dano de alguma criatura (Ex: Maldição da fraqueza - reduz dano em -5)
    MOVEMENT_BOOST: "Aumento de movimento", // Aumenta movimento (Ex: Tênis de corrida - +2 movimento)
    MOVEMENT_REDUCTION: "Redução de movimento", // Reduz movimento (Ex: Lâmina de Baldencur - -2 movimento)

    // ========== BUSCA ==========
    SEARCH_DECK: "Buscar no baralho",    // Busca carta no baralho (Ex: Escudo de Baldencur - busca Lâmina)
    SEARCH_GRAVEYARD: "Buscar no cemitério", // Busca no descarte (Ex: Escudo de Baldencur - busca no descarte)
    SEARCH_ANY: "Buscar em qualquer lugar", // Busca em qualquer zona (Ex: Cajado-Lança - busca Espada de Garetsco)

    // ========== INVOCAÇÃO ==========
    SUMMON: "Invocação",                 // Invoca criatura (Ex: Planta baixa M.C.3 - invoca Simulacro)
    SUMMON_CONDITIONAL: "Invocação condicional", // Invoca com condição (Ex: Guall-ghor - só se Guall-gar estiver no descarte)

    // ========== DESTRUIÇÃO ==========
    DESTROY: "Destruição",               // Destroi carta/criatura (Ex: Bola de destruição - destrói durável)
    DESTROY_ALL: "Destruição em massa",  // Destroi todas (Ex: Lâmina de Baldencur - destrói todas criaturas)
    DESTROY_EQUIPMENT: "Destruir equipamentos", // Destroi equipamentos (Ex: Dragão de Fogo - primeiro ataque destrói equipamentos)

    // ========== REMOÇÃO ==========
    REMOVE: "Remoção do jogo",           // Remove do jogo (Ex: Cajado-Lança de Garetso - remove qualquer carta)
    RETURN_TO_DECK: "Retornar ao baralho", // Retorna ao baralho (Ex: Tridente de Netevi - devolve cartas ao baralho)
    RETURN_TO_HAND: "Retornar à mão",    // Retorna à mão (Ex: Comunicado de recall - devolve à mão)
    BOUNCE: "Devolver",                  // Devolve para zona de origem (Ex: Mecanismo de mola - envia para casa de entrada)

    // ========== CONTROLE ==========
    GAIN_CONTROL: "Tomar controle",      // Toma controle de criatura (Ex: Artefato de controle mental - controla inimigo)
    CHANGE_CLASS: "Mudar classe",        // Altera classe (Ex: Manual de combate - vira Guerreiro, Loja de disfarces)
    CHANGE_ELEMENT: "Mudar elemento",    // Altera elemento (Ex: Tocado pela escuridão - vira Trevas)
    CHANGE_ATTRIBUTES: "Mudar atributos", // Altera atributos (Ex: Grimório de Liane - transforma em Besta)

    // ========== IMUNIDADE ==========
    IMMUNE_DAMAGE: "Imune a dano",       // Imune a dano (Ex: Escudo de Baldencur - imune a fogo)
    IMMUNE_EFFECTS: "Imune a efeitos",   // Imune a efeitos (Ex: Pladéa - não pode ser destruída por magias)
    IMMUNE_BATTLE: "Imune em batalha",   // Não sofre dano em batalha (Ex: Cajado-Lança - não sofre danos em batalha)

    // ========== NEGAÇÃO ==========
    NEGATE: "Negar",                     // Nega ativação (Ex: Contra-mágica - nega magia)
    NEGATE_ABILITY: "Negar habilidade",  // Nega habilidade (Ex: Selo do pentatrium - criatura não usa habilidade)

    // ========== CUSTO ==========
    COST_CONVERSION: "Conversão de custo", // Muda custo (Ex: Ritual de sangue - PMs viram PVs)
    COST_REDUCTION: "Redução de custo",  // Reduz custo (Ex: Bancada de trabalho - custo de Artífice reduzido pela metade)
    PM_GAIN: "Ganho de PM",              // Ganha PMs (Ex: Centelha mágica - +10 PMs, Coletor de energia)
    PM_LOSS: "Perda de PM",              // Perde PMs (Ex: Semente de Salbidor - todos perdem 10 PMs)
    CRYSTAL_COST: "Custo de cristais",   // Usa cristais (Ex: Lâmina de Baldencur - devolve 3 cristais)

    // ========== MOVIMENTO ==========
    TELEPORT: "Teletransporte",          // Move para qualquer lugar (Ex: Equação de transporte instantâneo)
    PUSH: "Empurrar",                    // Move criatura (Ex: Flechar os calcanhares - reduz movimento)
    TRAP: "Armadilha",                   // Armadilha em casa (Ex: Fosso de piche - prende criatura)
    BARRIER: "Barreira",                 // Bloqueia passagem (Ex: Barricada - não pode passar)

    // ========== DRAW ==========
    DRAW: "Comprar",                     // Compra carta (Ex: Bastão de Ferssis - compra 2)
    REVEAL: "Revelar",                   // Revela carta (Ex: Luz da vela - revela 5 cartas, Semente de Salbidor)
    MILL: "Descarte forçado",            // Obriga descartar (Ex: Armadilha falsa - descarta aleatório)

    // ========== ESPECIAL ==========
    TRANSFORM: "Transformação",          // Transforma em outra carta (Ex: Salbidor - vira árvore terrível)
    COUNTER: "Contador",                 // Usa contadores (Ex: Espada de Garetsco - contadores de trevas)
    AURA: "Aura",                        // Efeito contínuo em área (Ex: Biblioteca Tsaliano - zona de influência 2)
    FIELD: "Campo",                      // Efeito global (Ex: Mundo pós impacto - afeta todas criaturas)
    FLIP: "Virar",                       // Carta virada (Ex: Mecanismo de mola - virada para baixo)
    RANDOM: "Aleatório",                 // Efeito aleatório (Ex: Zona de magia incerta - rola 1d6)
    CONDITIONAL: "Condicional",          // Efeito com condição (Ex: Glaive de Henos - se atacar Trevas, destrói)
}