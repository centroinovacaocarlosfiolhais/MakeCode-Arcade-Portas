# 🎮 GUIA PASSO A PASSO - JOGO DE LABIRINTO
## Para alunos de 12 anos | MakeCode Arcade

---

## 📖 ÍNDICE
1. Apresentação do Jogo
2. Preparação Inicial
3. PASSO 1 - Criar as Variáveis
4. PASSO 2 - Criar o Jogador
5. PASSO 3 - Criar a Chave
6. PASSO 4 - Criar a Porta
7. PASSO 5 - Criar os Inimigos
8. PASSO 6 - Criar o Boss
9. PASSO 7 - Disparar Projéteis
10. PASSO 8 - Apanhar a Chave
11. PASSO 9 - Acertar Inimigos
12. PASSO 10 - Colisões com Inimigos
13. PASSO 11 - Entrar na Porta
14. PASSO 12 - Iniciar o Jogo
15. Customização e Ideias

---

## 🎯 APRESENTAÇÃO DO JOGO

### O que vamos criar?
Um jogo de labirinto com **3 níveis**:
- **Nível 1**: 2 inimigos
- **Nível 2**: 4 inimigos
- **Nível 3**: 1 BOSS que ressuscita!

### Como funciona?
1. 🗝️ Apanhas a **chave**
2. 👾 Aparecem **inimigos**
3. 🚪 Procuras a **porta** (aparece em local aleatório)
4. 🔫 Disparas nos inimigos para te defenderes
5. 🏃 Entras na porta para passar de nível

### Sistema de Pontos:
- Chave: **20 pontos**
- Inimigo morto: **10 pontos**
- Boss morto: **100 pontos**
- Completar nível: **50 pontos**

---

## 🔧 PREPARAÇÃO INICIAL

### Antes de começar:
1. Abre **https://arcade.makecode.com/**
2. Clica em **"New Project"**
3. Dá um nome ao projeto: **"Labirinto Misterioso"**
4. Muda para **JavaScript** (botão no topo)
5. **APAGA TODO** o código que está lá

Agora estás pronto para começar! 🚀

---

## 📝 PASSO 1 - CRIAR AS VARIÁVEIS

### O que são variáveis?
Variáveis são como "caixas" onde guardamos informação. Por exemplo:
- Uma caixa para guardar o jogador
- Uma caixa para guardar a chave
- Uma caixa para contar os pontos

### Código a copiar:
```javascript
// JOGO DE LABIRINTO - VERSÃO BLOCOS SIMPLES
// MakeCode Arcade

let jogador: Sprite = null
let chave: Sprite = null
let porta: Sprite = null
let nivelAtual = 1
let chaveApanhada = false
let boss: Sprite = null
let vidaBoss = 5
let inimigo1: Sprite = null
let inimigo2: Sprite = null
let inimigo3: Sprite = null
let inimigo4: Sprite = null
```

### 💡 Explicação:
- **`let jogador: Sprite = null`** → Cria uma variável para o jogador (ainda vazia)
- **`let nivelAtual = 1`** → Guarda em que nível estamos (começa no 1)
- **`let chaveApanhada = false`** → Guarda se já apanhámos a chave (sim ou não)
- **`let vidaBoss = 5`** → O boss tem 5 pontos de vida
- **`Sprite`** → É o tipo de objeto para personagens no jogo

---

## 👤 PASSO 2 - CRIAR O JOGADOR

### O que vamos fazer?
Criar o nosso jogador (uma bolinha amarela) e fazer com que se possa mover.

### Código a copiar:
```javascript
// CRIAR JOGADOR (so uma vez)
jogador = sprites.create(img`
    . . . . . 5 5 5 5 5 5 . . . . .
    . . . . 5 5 5 5 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 5 5 . . .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . . 5 5 5 f f 5 5 f f 5 5 5 . .
    . . 5 5 5 f f 5 5 f f 5 5 5 . .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . . 5 5 5 5 f f f f 5 5 5 5 . .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . . . 5 5 5 5 5 5 5 5 5 5 . . .
    . . . . 5 5 5 5 5 5 5 5 . . . .
    . . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)

jogador.setPosition(80, 60)
controller.moveSprite(jogador, 80, 80)
jogador.setStayInScreen(true)
info.setLife(3)
info.setScore(0)
scene.setBackgroundColor(9)
```

### 💡 Explicação linha a linha:
- **`sprites.create(img`...`)`** → Cria um sprite com a imagem que desenhamos
- **`SpriteKind.Player`** → Diz que é o jogador (importante para colisões!)
- **`jogador.setPosition(80, 60)`** → Coloca o jogador no centro do ecrã
- **`controller.moveSprite(jogador, 80, 80)`** → Permite mover com as setas (velocidade 80)
- **`jogador.setStayInScreen(true)`** → O jogador não sai do ecrã
- **`info.setLife(3)`** → O jogador começa com 3 vidas ❤️❤️❤️
- **`info.setScore(0)`** → Pontuação começa em 0
- **`scene.setBackgroundColor(9)`** → Fundo azul escuro

### 🎨 CUSTOMIZAÇÃO:
Podes mudar as cores no `img`:
- **5** = amarelo
- **f** = branco
- **.** = transparente
- Experimenta outros números (1-9) para cores diferentes!

---

## 🗝️ PASSO 3 - CRIAR A CHAVE

### O que vamos fazer?
Criar uma função que coloca a chave num sítio aleatório.

### Código a copiar:
```javascript
// FUNCAO PARA CRIAR CHAVE
function criarChave() {
    chave = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . 5 5 5 5 5 . . . . . .
        . . . . 5 5 5 5 5 5 5 . . . . .
        . . . 5 5 5 f f 5 5 5 5 . . . .
        . . . 5 5 f 1 1 f 5 5 5 . . . .
        . . . 5 5 f 1 1 f 5 5 5 . . . .
        . . . 5 5 5 f f 5 5 5 5 . . . .
        . . . . 5 5 5 5 5 5 5 . . . . .
        . . . . . 5 5 5 5 5 . . . . . .
        . . . . . . 5 . 5 . . . . . . .
        . . . . . . 5 . 5 . . . . . . .
        . . . . . . 5 5 5 . . . . . . .
    `, SpriteKind.Food)
    chave.setPosition(randint(20, 140), randint(20, 100))
}
```

### 💡 Explicação:
- **`function criarChave() { ... }`** → Cria uma função (um conjunto de instruções)
- **`SpriteKind.Food`** → Tipo "comida" para o jogador apanhar
- **`randint(20, 140)`** → Número aleatório entre 20 e 140
- **`chave.setPosition(...)`** → Coloca a chave numa posição aleatória

### ❓ O que é uma função?
É como uma receita! Quando dizes "criarChave()", o computador segue todos os passos dentro da função.

---

## 🚪 PASSO 4 - CRIAR A PORTA

### O que vamos fazer?
Criar a porta que aparece quando apanhamos a chave.

### Código a copiar:
```javascript
// FUNCAO PARA CRIAR PORTA
function criarPorta() {
    porta = sprites.create(img`
        . . 8 8 8 8 8 8 8 8 8 8 . .
        . . 8 7 7 7 7 7 7 7 7 8 . .
        . . 8 7 7 7 7 7 7 7 7 8 . .
        . . 8 7 7 7 7 7 7 7 7 8 . .
        . . 8 7 7 e e e 7 7 7 8 . .
        . . 8 7 7 e 1 e 7 7 7 8 . .
        . . 8 7 7 e e e 7 7 7 8 . .
        . . 8 7 7 7 7 7 7 7 7 8 . .
        . . 8 7 7 7 7 7 7 7 7 8 . .
        . . 8 7 7 7 7 7 7 7 7 8 . .
        . . 8 7 7 7 7 7 7 7 7 8 . .
        . . 8 8 8 8 8 8 8 8 8 8 . .
    `, SpriteKind.Enemy)
    porta.setPosition(randint(20, 140), randint(20, 100))
}
```

### 💡 Explicação:
- A porta é tipo **Enemy** (para poder detetar quando o jogador toca nela)
- Também aparece numa **posição aleatória**
- Cores: **8** = cinzento, **7** = castanho, **e** = laranja

---

## 👾 PASSO 5 - CRIAR OS INIMIGOS

### O que vamos fazer?
Criar 3 funções diferentes:
- Uma para o **Nível 1** (2 inimigos)
- Uma para o **Nível 2** (4 inimigos)
- Uma para **destruir** todos os inimigos

### Código a copiar:
```javascript
// FUNCAO PARA DESTRUIR INIMIGOS
function destruirInimigos() {
    if (inimigo1) {
        inimigo1.destroy()
    }
    if (inimigo2) {
        inimigo2.destroy()
    }
    if (inimigo3) {
        inimigo3.destroy()
    }
    if (inimigo4) {
        inimigo4.destroy()
    }
    if (boss) {
        boss.destroy()
    }
}

// FUNCAO PARA CRIAR INIMIGOS NIVEL 1
function criarInimigosNivel1() {
    inimigo1 = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 f f 2 2 f f 2 2 . . . .
        . . 2 2 f 1 f f 1 f 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 2 f f f f 2 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
    `, SpriteKind.Enemy)
    inimigo1.setPosition(randint(10, 150), randint(10, 110))
    inimigo1.follow(jogador, 30)
    
    inimigo2 = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 f f 2 2 f f 2 2 . . . .
        . . 2 2 f 1 f f 1 f 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 2 f f f f 2 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
    `, SpriteKind.Enemy)
    inimigo2.setPosition(randint(10, 150), randint(10, 110))
    inimigo2.follow(jogador, 30)
}

// FUNCAO PARA CRIAR INIMIGOS NIVEL 2
function criarInimigosNivel2() {
    inimigo1 = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 f f 2 2 f f 2 2 . . . .
        . . 2 2 f 1 f f 1 f 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 2 f f f f 2 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
    `, SpriteKind.Enemy)
    inimigo1.setPosition(randint(10, 150), randint(10, 110))
    inimigo1.follow(jogador, 35)
    
    inimigo2 = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 f f 2 2 f f 2 2 . . . .
        . . 2 2 f 1 f f 1 f 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 2 f f f f 2 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
    `, SpriteKind.Enemy)
    inimigo2.setPosition(randint(10, 150), randint(10, 110))
    inimigo2.follow(jogador, 35)
    
    inimigo3 = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 f f 2 2 f f 2 2 . . . .
        . . 2 2 f 1 f f 1 f 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 2 f f f f 2 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
    `, SpriteKind.Enemy)
    inimigo3.setPosition(randint(10, 150), randint(10, 110))
    inimigo3.follow(jogador, 35)
    
    inimigo4 = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 f f 2 2 f f 2 2 . . . .
        . . 2 2 f 1 f f 1 f 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . 2 2 2 f f f f 2 2 2 . . . .
        . . 2 2 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 . . . . .
        . . . . 2 2 2 2 2 2 . . . . . .
    `, SpriteKind.Enemy)
    inimigo4.setPosition(randint(10, 150), randint(10, 110))
    inimigo4.follow(jogador, 35)
}
```

### 💡 Explicação:
- **`if (inimigo1) { ... }`** → Verifica se o inimigo existe antes de destruir
- **`inimigo1.follow(jogador, 30)`** → O inimigo persegue o jogador com velocidade 30
- **Nível 1**: velocidade 30 (mais lento)
- **Nível 2**: velocidade 35 (mais rápido!)
- Cor **2** = vermelho

---

## 👑 PASSO 6 - CRIAR O BOSS

### O que vamos fazer?
Criar o boss laranja gigante que aparece no nível 3!

### Código a copiar:
```javascript
// FUNCAO PARA CRIAR BOSS (SO NO NIVEL 3)
function criarBoss() {
    boss = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . 7 7 7 7 7 7 7 7 7 . . . .
        . . 7 7 7 7 7 7 7 7 7 7 7 . . .
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
        . 7 7 f f 7 7 7 7 f f 7 7 7 . .
        . 7 7 f 2 f 7 7 f 2 f 7 7 7 . .
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
        . 7 7 7 f f f f f f 7 7 7 7 . .
        . 7 7 7 f 2 2 2 2 f 7 7 7 7 . .
        . 7 7 7 7 f f f f 7 7 7 7 7 . .
        . . 7 7 7 7 7 7 7 7 7 7 7 . . .
        . . . 7 7 7 7 7 7 7 7 7 . . . .
    `, SpriteKind.Enemy)
    boss.setPosition(80, 60)
    boss.follow(jogador, 45)
    vidaBoss = 5
}
```

### 💡 Explicação:
- O boss é **maior** que os inimigos normais
- Velocidade **45** (mais rápido que todos!)
- Começa com **5 pontos de vida**
- Cor **7** = laranja

---

## 🔫 PASSO 7 - DISPARAR PROJÉTEIS

### O que vamos fazer?
Programar o botão A para disparar na direção que estamos a mover.

### Código a copiar:
```javascript
// DISPARAR
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projetil = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 5 5 5 . . . . . . . .
        . . . . 5 5 5 5 5 . . . . . . .
        . . . . 5 5 4 5 5 . . . . . . .
        . . . . 5 5 5 5 5 . . . . . . .
        . . . . . 5 5 5 . . . . . . . .
    `, jogador, 0, 0)
    
    if (controller.left.isPressed()) {
        projetil.vx = -150
    } else if (controller.right.isPressed()) {
        projetil.vx = 150
    } else if (controller.up.isPressed()) {
        projetil.vy = -150
    } else if (controller.down.isPressed()) {
        projetil.vy = 150
    } else {
        projetil.vx = 150
    }
})
```

### 💡 Explicação:
- **`controller.A.onEvent(...)`** → Quando pressionas o botão A
- **`sprites.createProjectileFromSprite(...)`** → Cria um projétil a partir do jogador
- **`projetil.vx = 150`** → Velocidade no eixo X (horizontal)
- **`projetil.vy = -150`** → Velocidade no eixo Y (vertical, negativo = para cima)
- **`if ... else if ... else`** → Verifica que direção estás a premir

### 📊 Direções:
- **vx negativo (-150)** = esquerda ←
- **vx positivo (150)** = direita →
- **vy negativo (-150)** = cima ↑
- **vy positivo (150)** = baixo ↓

---

## 🗝️ PASSO 8 - APANHAR A CHAVE

### O que vamos fazer?
Detetar quando o jogador toca na chave e fazer spawn dos inimigos.

### Código a copiar:
```javascript
// APANHAR CHAVE
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    chave.destroy()
    chaveApanhada = true
    info.changeScoreBy(20)
    game.splash("Chave apanhada!")
    criarPorta()
    
    if (nivelAtual == 1) {
        criarInimigosNivel1()
    } else if (nivelAtual == 2) {
        criarInimigosNivel2()
    } else if (nivelAtual == 3) {
        criarBoss()
        game.splash("BOSS CHEGOU!")
    }
})
```

### 💡 Explicação:
- **`sprites.onOverlap(...)`** → Deteta quando dois sprites se tocam
- **`SpriteKind.Player, SpriteKind.Food`** → Jogador toca em comida (chave)
- **`chave.destroy()`** → Remove a chave do jogo
- **`chaveApanhada = true`** → Marca que já temos a chave
- **`info.changeScoreBy(20)`** → Adiciona 20 pontos
- **`game.splash(...)`** → Mostra mensagem no ecrã
- **`if ... else if ... else`** → Cria inimigos conforme o nível

---

## 💥 PASSO 9 - ACERTAR INIMIGOS

### O que vamos fazer?
Detetar quando o projétil acerta num inimigo ou no boss.

### Código a copiar:
```javascript
// PROJETIL ACERTA INIMIGO
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    
    if (otherSprite == boss) {
        vidaBoss = vidaBoss - 1
        if (vidaBoss <= 0) {
            info.changeScoreBy(100)
            game.splash("Boss derrotado!", "Ele voltou!")
            vidaBoss = 5
            boss.setPosition(porta.x, porta.y)
        }
    } else if (otherSprite != porta) {
        otherSprite.destroy(effects.fire, 100)
        info.changeScoreBy(10)
    }
})
```

### 💡 Explicação:
- **`SpriteKind.Projectile`** → O projétil
- **`SpriteKind.Enemy`** → Inimigos e porta (ambos são Enemy)
- **`sprite.destroy()`** → Destrói o projétil
- **`if (otherSprite == boss)`** → Verifica se acertou no boss
- **`vidaBoss = vidaBoss - 1`** → Tira 1 vida ao boss
- **`if (vidaBoss <= 0)`** → Se a vida do boss chegar a 0...
- **`boss.setPosition(porta.x, porta.y)`** → Boss respawn na porta!
- **`effects.fire`** → Efeito de fogo quando inimigo morre
- **`otherSprite != porta`** → Não destrói a porta com tiros

### 🎯 Mecânica especial:
O boss **não morre** - ele ressuscita na porta com 5 vidas novas!

---

## 💀 PASSO 10 - COLISÕES COM INIMIGOS

### O que vamos fazer?
Programar o que acontece quando um inimigo toca no jogador.

### Código a copiar:
```javascript
// ENTRAR NA PORTA OU TOCAR EM INIMIGO
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == porta && chaveApanhada) {
        porta.destroy()
        destruirInimigos()
        
        if (nivelAtual < 3) {
            info.changeScoreBy(50)
            game.splash("Nivel " + nivelAtual + " completo!")
            nivelAtual = nivelAtual + 1
            chaveApanhada = false
            jogador.setPosition(80, 60)
            criarChave()
        } else {
            game.over(true, effects.confetti)
        }
    } else if (otherSprite != porta) {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 200)
        otherSprite.setPosition(randint(10, 150), randint(10, 110))
        pause(500)
    }
})
```

### 💡 Explicação PARTE 1 - Entrar na porta:
- **`if (otherSprite == porta && chaveApanhada)`** → Se for a porta E já temos a chave
- **`porta.destroy()`** → Remove a porta
- **`destruirInimigos()`** → Remove todos os inimigos
- **`if (nivelAtual < 3)`** → Se não for o último nível...
- **`nivelAtual = nivelAtual + 1`** → Aumenta o nível
- **`chaveApanhada = false`** → Precisas de apanhar nova chave
- **`jogador.setPosition(80, 60)`** → Jogador volta ao centro
- **`criarChave()`** → Cria nova chave
- **`else { game.over(true) }`** → Se for nível 3, GANHAS! 🎉

### 💡 Explicação PARTE 2 - Tocar em inimigo:
- **`else if (otherSprite != porta)`** → Se NÃO for a porta (é um inimigo)
- **`info.changeLifeBy(-1)`** → Perde 1 vida
- **`scene.cameraShake(4, 200)`** → Ecrã treme
- **`otherSprite.setPosition(...)`** → Inimigo teleporta para longe
- **`pause(500)`** → Pausa de 0.5 segundos

---

## 🎬 PASSO 11 - INICIAR O JOGO

### O que vamos fazer?
Código final para começar o jogo!

### Código a copiar:
```javascript
// INICIAR JOGO
game.splash("LABIRINTO")
game.splash("Encontra a chave!")
criarChave()
```

### 💡 Explicação:
- **`game.splash(...)`** → Mostra mensagem de introdução
- **`criarChave()`** → Cria a primeira chave do jogo

---

## 🎉 PARABÉNS!

✅ O teu jogo está **completo e funcional**!

### Para testar:
1. Clica no botão **Play ▶️** (à esquerda)
2. Joga e testa se tudo funciona
3. Se houver erros, verifica se copiaste tudo corretamente

---

## 🎨 CUSTOMIZAÇÃO E IDEIAS

Agora que o jogo funciona, podes personalizá-lo! Aqui estão ideias:

### 🖌️ 1. MUDAR CORES
Experimenta mudar os números nas sprites:
```
1 = branco
2 = vermelho
3 = rosa
4 = laranja
5 = amarelo
6 = verde claro
7 = verde escuro
8 = azul claro
9 = azul escuro
a = roxo
b = castanho claro
c = castanho
d = rosa escuro
e = laranja escuro
f = branco
```

### ⚡ 2. AJUSTAR DIFICULDADE

**Fazer mais fácil:**
```javascript
// Mais vidas
info.setLife(5)  // em vez de 3

// Inimigos mais lentos
inimigo1.follow(jogador, 20)  // em vez de 30

// Boss mais fraco
vidaBoss = 3  // em vez de 5
```

**Fazer mais difícil:**
```javascript
// Menos vidas
info.setLife(1)  // modo hardcore!

// Inimigos mais rápidos
inimigo1.follow(jogador, 50)  // em vez de 30

// Boss mais forte
vidaBoss = 10  // em vez de 5
```

### 🎯 3. SISTEMA DE PONTOS

**Mudar pontos:**
```javascript
info.changeScoreBy(50)  // em vez de 20 pela chave
info.changeScoreBy(25)  // em vez de 10 por inimigo
info.changeScoreBy(500) // em vez de 100 pelo boss
```

### 🔫 4. PROJÉTEIS

**Projéteis mais rápidos:**
```javascript
projetil.vx = 200  // em vez de 150
```

**Projéteis mais lentos:**
```javascript
projetil.vx = 100  // em vez de 150
```

### 👾 5. ADICIONAR MAIS NÍVEIS

Podes criar um Nível 4! Copia e adapta:
```javascript
// No início, mudar para 4 níveis:
if (nivelAtual < 4) {  // em vez de 3

// Criar função para nível 4:
function criarInimigosNivel4() {
    // criar 6 inimigos muito rápidos!
    // copiar código dos níveis anteriores
}
```

### 🎵 6. ADICIONAR SONS

Adiciona efeitos sonoros:
```javascript
// Quando apanha chave
music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)

// Quando mata inimigo
music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)

// Quando perde vida
music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
```

### 🏆 7. POWER-UPS

Adiciona itens especiais:
```javascript
// Criar coração que dá vida extra
let coracao = sprites.create(img`
    . . f f . . . . . . f f . .
    . f 2 2 f . . . . f 2 2 f .
    f 2 2 2 2 f . . f 2 2 2 2 f
    f 2 2 2 2 f . . f 2 2 2 2 f
    f 2 2 2 2 2 f f 2 2 2 2 2 f
    . f 2 2 2 2 2 2 2 2 2 2 f .
    . . f 2 2 2 2 2 2 2 2 f . .
    . . . f 2 2 2 2 2 2 f . . .
    . . . . f 2 2 2 2 f . . . .
    . . . . . f 2 2 f . . . . .
    . . . . . . f f . . . . . .
`, SpriteKind.Food)

// Quando apanha o coração
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite == coracao) {
        coracao.destroy()
        info.changeLifeBy(1)
        game.splash("Vida extra!")
    }
})
```

### 🎨 8. MELHORAR VISUAIS

**Mudar fundo:**
```javascript
scene.setBackgroundColor(1)  // vermelho
scene.setBackgroundColor(7)  // verde
scene.setBackgroundColor(11) // roxo
```

**Adicionar animações:**
```javascript
// Fazer jogador piscar quando perde vida
for (let i = 0; i < 3; i++) {
    jogador.setFlag(SpriteFlag.Invisible, true)
    pause(100)
    jogador.setFlag(SpriteFlag.Invisible, false)
    pause(100)
}
```

### 🏅 9. SISTEMA DE VIDAS DO BOSS

Mostrar vidas do boss:
```javascript
// Depois de criar o boss
boss.sayText("❤️❤️❤️❤️❤️")

// Quando acerta no boss
if (vidaBoss == 4) {
    boss.sayText("❤️❤️❤️❤️")
} else if (vidaBoss == 3) {
    boss.sayText("❤️❤️❤️")
} else if (vidaBoss == 2) {
    boss.sayText("❤️❤️")
} else if (vidaBoss == 1) {
    boss.sayText("❤️")
}
```

### 🎯 10. DESAFIOS EXTRA

**Criar modo tempo:**
```javascript
// No início do jogo
let tempoRestante = 60  // 60 segundos

game.onUpdateInterval(1000, function() {
    tempoRestante = tempoRestante - 1
    if (tempoRestante <= 0) {
        game.over(false)  // Game Over!
    }
})
```

**Criar inimigos que atiram:**
```javascript
game.onUpdateInterval(2000, function() {
    if (inimigo1) {
        let tiroInimigo = sprites.createProjectileFromSprite(img`
            2 2 2
            2 2 2
            2 2 2
        `, inimigo1, 0, 0)
        tiroInimigo.follow(jogador, 50)
    }
})
```

---

## 📚 GLOSSÁRIO DE TERMOS

### Programação:
- **Variável**: Caixa que guarda informação
- **Função**: Conjunto de instruções com um nome
- **Sprite**: Personagem ou objeto no jogo
- **If/Else**: Escolha - "Se isto, faz aquilo"
- **Loop**: Repetição de código

### Jogo:
- **Overlap**: Quando dois objetos se tocam
- **Projectile**: Objeto que se move (bala, tiro)
- **Spawn**: Aparecer no jogo
- **Destroy**: Desaparecer do jogo
- **Random**: Aleatório

### Coordenadas:
- **X**: Posição horizontal (esquerda-direita)
- **Y**: Posição vertical (cima-baixo)
- **vx**: Velocidade horizontal
- **vy**: Velocidade vertical

---

## ❓ PERGUNTAS FREQUENTES

**P: O jogo não funciona. O que faço?**
R: Verifica se:
1. Copiaste TODO o código
2. Não há erros a vermelho no ecrã
3. Estás em JavaScript (não em Blocos)

**P: Como volto aos blocos?**
R: Clica no botão "Blocos" no topo. O MakeCode converte automaticamente!

**P: Posso usar as minhas próprias sprites?**
R: Sim! Clica na imagem no código e edita no editor de imagens.

**P: Como partilho o meu jogo?**
R: Clica em "Partilhar" no topo e copia o link!

**P: O boss é muito difícil!**
R: Muda `vidaBoss = 5` para `vidaBoss = 3` ou `vidaBoss = 2`

**P: Quero mais inimigos!**
R: Cria `inimigo5`, `inimigo6`, etc. copiando o código dos outros inimigos.

---

## 🎓 PRÓXIMOS PASSOS

Depois de dominares este jogo, podes aprender:
1. **Criar labirintos** usando tiles (blocos)
2. **Adicionar música** de fundo
3. **Criar menu** inicial
4. **Guardar highscores** 
5. **Fazer o boss ter padrões** de ataque diferentes

---

## 🌟 BOA SORTE!

Agora tens todas as ferramentas para:
✅ Entender o código
✅ Criar o jogo completo
✅ Customizar como quiseres
✅ Criar os teus próprios jogos!

**Diverte-te a programar!** 🚀🎮

---

## 📞 AJUDA E SUPORTE

Se precisares de ajuda:
- Pergunta ao professor
- Ajuda um colega
- Experimenta e testa!

**Lembra-te**: Errar faz parte de programar. Se algo não funcionar, tenta outra vez!

---

# FIM DO GUIA 🎉
