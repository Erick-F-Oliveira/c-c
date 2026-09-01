# Cartas & cristais (🃏&💎)
<small>``Ou Cristais & Cartas, ainda não defini.``</small><br>

Esse é o repositório do jogo que venho desenvolvendo há algum tempo, com a ideia de que ele seja um jogo físico e também digital.

O jogo ainda está em fase de testes, mas atualmente esses testes são feitos de forma muito manual. O objetivo deste projeto é justamente mudar isso: transformar o jogo em algo que possa ser executado, testado e, eventualmente, jogado diretamente pelo navegador.

Diferente da maioria dos READMEs de projetos, este aqui tem o intuito de ser um pouco mais explicativo. Ele também serve como uma espécie de documentação e diário de desenvolvimento, ainda com foco na parte técnica (o código), mas de uma forma que ajude até quem não programa a entender o que está acontecendo.

Por isso, você vai notar que uso um linguajar mais coloquial e, muitas vezes, um tom cômico.

**Não entre em pânico.**


___

---


## Sumário 📑

- [O Jogo 🎮](#o-jogo-)
- [Uma breve introdução 📖](#uma-breve-introdução-)
- [O Código 💻](#o-código-)
- [Status do projeto 🚧](#status-do-projeto-)
- [To-do list 📋](#to-do-list-)
- [Instalação e uso ⚙️](#instalação-e-uso-)
- [Estrutura do projeto 🏗️](#estrutura-do-projeto-)
- [Sobre o desenvolvimento 🛠️](#sobre-o-desenvolvimento-)
- [Roadmap 🗺️](#roadmap-)
- [Changelog 📜](#changelog-)

---
## O Jogo 🎮
<small>~~Você perdeu~~<br></small>
Brincadeiras à parte, o jogo também não está 100% pronto. Ainda existem regras e mecânicas que precisam ser testadas, ajustadas e melhor descritas.

Mas, no geral, o "core" do jogo já está definido: tipos de cartas, primeiras classes dos jogadores e algumas das regras fundamentais.

Agora preciso transformar tudo isso em código para descobrir o que realmente funciona e, principalmente, ***o que parece uma boa ideia no papel, mas é horrível quando alguém tenta jogar.***
### Uma breve introdução 📖
O jogo é uma mistura de três estilos de jogos que gosto bastante:<br>
* **Jogos de cartas** em um estilo parecido com Yu-Gi-Oh!
* **Jogos de tabuleiro**
* **RPG de mesa**

O resultado é um jogo onde os jogadores utilizam peças com classes comuns de RPG para se movimentar pelo tabuleiro e coletar os cristais espalhados por ele.

Além disso, existem três baralhos de cartas, construídos em conjunto, que podem ajudar ou atrapalhar a estratégia dos jogadores.

Para evitar transformar este **README** em um livro, as regras e cartas já desenvolvidas estão documentadas separadamente:
* **[Regras gerais e classes](https://docs.google.com/document/d/1AkBdvxABXg8Bi8KRzOdN-Beu8K_rjQB4ZdhH0ckZKVo/edit?tab=t.0)**
* **[Cartas de itens](https://docs.google.com/document/d/1I8wOvkfiT_F1bAHaOJ1opVlIRoXbCNAU1o12Dh6bDj8/edit?tab=t.0)**
* **[Cartas de magias](https://docs.google.com/document/d/1wFMs7OjhCg4TKd6hzFeQ97dqK1rm6PhKjllcT56w0IY/edit?tab=t.0)**
* **[Cartas de criaturas](https://docs.google.com/document/d/1Bd0NxIyD0RDbEFrDSdLDkQZZa22_JzZXjqCdkhdPDG8/edit?tab=t.0)**

[Voltar ao sumário ⬆️](#sumário-)
___

## O código 💻

Esse é,o meu projeto mais complexo. 

Aqui estou desenvolvendo tanto o backend quanto o frontend, sem utilizar uma engine ou ferramenta de criação de jogos.<br>
A ideia é que o jogo seja jogável diretamente pelo navegador e, futuramente, possa ser implementado como uma **[Atividade do Discord](https://discord.com/blog/server-activities-games-voice-watch-together)**.<br>
Por isso, estou tentando construir o projeto de uma forma que permita que ele cresça sem precisar reescrever tudo quando novas funcionalidades forem adicionadas.<br>
Além de criar o jogo, este projeto também serve como uma forma de colocar em prática e melhorar minhas habilidades com **JavaScript, arquitetura de aplicações, testes, comunicação em tempo real e desenvolvimento de jogos.**<br>

Se você achou o projeto legal, interessante ou, no mínimo, curioso e quiser contribuir, fique à vontade para abrir um Pull Request com alguma melhoria ou correção.

Também pode mandar uma sugestão diretamente para mim no Discord: [Obernac](https://discord.com/users/804410755139108986) <br>

Sem mais delongas passemos paro o código.<br>

[Voltar ao sumário ⬆️](#sumário-)

---
### Status do projeto 🚧

Atualmente o projeto está em desenvolvimento.

A estrutura inicial do backend já está sendo construída e o próximo grande objetivo é chegar a um MVP jogável.
```
Estrutura
   ↓
  MVP
   ↓
Playtest
   ↓
Implementação no Discord
   ↓
Playtest no Discord
   ↓
Lançamento
```
[Voltar ao sumário ⬆️](#sumário-)

---
### To do list 📋
* [x] Estrutura fundamental
* [ ] MVP
* [ ] Playtest
* [ ] Implementação Discord
* [ ] Playtest Discord
* [ ] Lançamento

<small>``Essa é a lista de afazeres macro. Ela pode mudar a qualquer momento, principalmente porque eu provavelmente vou inventar mais coisas no meio do caminho.``</small>

### Desenvolvimento

 Essa parte será atualizada conforme o projeto evoluir.
* [ ] Sistema de partidas
* [ ] Sistema de tabuleiro
* [ ] Sistema de cristais
* [ ] Comunicação em tempo real
* [ ] Interface do jogo
* [ ] Testes automatizados
* [ ] Primeiro playtest digital
 
[Voltar ao sumário ⬆️](#sumário-)

---
## Instalação e uso ⚙️

Se você está familiarizado com JavaScript, ou já programou em alguma outra linguagem e quer entender melhor como o projeto funciona, pode clonar este repositório e executá-lo localmente.

**1. Clone o repositório.**
```bash
git clone https://github.com/Erick-F-Oliveira/c-c.git
```
**2 Vá até o server.**
```bash
cd c-c/server
```
**3 Instale as dependências.**
```bash
npm install
```
**4 Crie um arquivo ``.env``**

Use o arquivo `` .env.example`` como referência.  
Mantenha os mesmos nomes das variáveis utilizadas no arquivo de exemplo. Caso queira alterar algum nome, lembre-se de alterar também o código que utiliza essa variável 

**5 Execute o back-end.**
```bash
#Para executar os testes:
npm run test

#Para executar o projeto em desenvolvimento, utilizando Nodemon:
npm run dev
```
**6 Abra outro terminal e vá no client.**
```bash
cd c-c/client
```
**7 Instale as dependências.**
```bash
npm install
```
**8 Execute o front-end**
```bash

#Para executar em desenvolvimento
npm run dev
```
[Voltar ao sumário ⬆️](#sumário-)

---

### Estrutura fundamental 🏗️

**Server**<br>
O diretório ``server`` é a base para o **backend do jogo.**<br>
É nele que ficam as partes que o usuário final não precisa necessariamente conhecer ou enxergar, como regras de negócio, comunicação com o banco de dados, validações e comunicação com o **frontend**.

A estrutura ainda está em desenvolvimento e provavelmente vai mudar bastante conforme novas funcionalidades forem implementadas.

### Pacotes utilizados

**Runtime e Backend**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) 
- [Socket.IO](https://socket.io/pt-br/)

**Banco de dados**
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)
- [Mongoose](https://mongoosejs.com/)

**Desenvolvimento e testes**
- [Nodemon](https://nodemon.io/)
- [Jest](https://jestjs.io/pt-BR/)

**Utilidades**
- [Cors](https://github.com/expressjs/cors?tab=readme-ov-file)
- [Chalk](https://github.com/chalk/chalk)
- [Dotenv](https://github.com/motdotla/dotenv)

**client**<br>
Já o ``client`` é responsável pelo site do jogo e o jogo em si. As coisas com que o usuário interage

[Voltar ao sumário ⬆️](#sumário-)

---

### Estrutura de pastas 📁
```bash
                      
src/
   │   ├── constants/         
   │   ├── data/            
   │   │   ├── enemy-cards-data.js
   │   │   ├── item-cards-data.js
   │   │   └── magic-cards-data.js
   │   ├── registry/
   |   │     ├──
   │   │     ├──
   │   │     └──
   │   ├── factories/         
   │   ├── services/          
   │   ├── validators/        
   │   ├── models/           
   │   └── server.js       
   └── package.json

```
>A estrutura acima representa o estado atual do projeto e pode mudar conforme novas funcionalidades forem adicionadas.

[Voltar ao sumário ⬆️](#sumário-)

---
## Sobre o desenvolvimento 🛠️

Como esse projeto também está sendo utilizado para estudar e experimentar novas tecnologias, algumas decisões podem parecer exageradas ou até estranhas para um projeto desse tamanho.

**Isso é proposital.**

Uma parte do objetivo aqui é justamente experimentar diferentes formas de estruturar o código, escrever testes e resolver problemas que provavelmente não apareceriam em um projeto mais simples.

Então, se você encontrar algum código estranho, existem duas possibilidades:

1. Eu ainda não descobri uma forma melhor de fazer;
2. Eu descobri, mas estou testando se a forma estranha funciona mesmo.

E existe uma terceira possibilidade:

3. **Eu fiz merda.**

Nesse caso, um **Pull Request** é bem-vindo.

[Voltar ao sumário ⬆️](#sumário-)

---

## Roadmap 🗺️

O desenvolvimento será acompanhado neste README conforme o projeto for avançando.

### Fase 1 — Estrutura
* [x] Estrutura inicial do backend
* [x] Configuração do projeto
* [x] Configuração do banco
* [x] Estrutura inicial de testes

### Fase 2 — MVP
* [x] Estrutura inicial do frontend
* [ ] Sorteador de cartas
* [ ] Criar jogadores
* [ ] Criar partida
* [ ] Criar tabuleiro
* [ ] Movimentação
* [ ] Sistema de cristais
* [ ] Sistema de cartas
* [ ] Condição de vitória

### Fase 3 — Playtest
* [ ] Primeiro teste completo
* [ ] Identificar problemas nas regras
* [ ] Ajustar balanceamento
* [ ] Corrigir problemas técnicos

### Fase 4 — Discord
* [ ] Adaptar interface
* [ ] Integrar Discord Activities
* [ ] Testar multiplayer
* [ ] Playtest dentro do Discord

### Fase 5 — Lançamento
* [ ] Versão jogável
* [ ] Documentação final
* [ ] Deploy
* [ ] Lançamento🎉
  
[Voltar ao sumário ⬆️](#sumário-)

---
## Changelog 📜

Como este README também serve como um diário do desenvolvimento, novas mudanças importantes serão registradas aqui.

**2026**

Agosto

* Estrutura inicial do backend
* Configuração do projeto
* Primeiros testes automatizados
* Estrutura inicial para comunicação em tempo real
* Início do desenvolvimento do MVP

[Voltar ao sumário ⬆️](#sumário-)

---
## E agora? 👀

O objetivo imediato é simples:

**Fazer o jogo existir fora do papel.**

Depois disso, descobrir se ele é realmente divertido.

**E, se não for...**

Bom, pelo menos o código vai estar organizado. 😌

[Voltar ao sumário ⬆️](#sumário-)


















