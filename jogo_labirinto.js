// JOGO DE LABIRINTO - VERSÃO BLOCOS SIMPLES
// MakeCode Arcade

// ========== PASSO 1: DECLARAR VARIÁVEIS ==========
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
let projetil: Sprite = null

// ========== PASSO 2: CRIAR O JOGADOR ==========
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

// ========== PASSO 3: FUNCAO PARA CRIAR CHAVE ==========
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

// ========== PASSO 4: FUNCAO PARA CRIAR PORTA ==========
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

// ========== PASSO 5: FUNCAO PARA DESTRUIR INIMIGOS ==========
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

// ========== PASSO 6: FUNCAO PARA CRIAR INIMIGOS NIVEL 1 ==========
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

// ========== PASSO 7: FUNCAO PARA CRIAR INIMIGOS NIVEL 2 ==========
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

// ========== PASSO 8: FUNCAO PARA CRIAR BOSS ==========
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

// ========== PASSO 9: DISPARAR PROJETIL ==========
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projetil = sprites.createProjectileFromSprite(img`
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

// ========== PASSO 10: APANHAR A CHAVE ==========
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

// ========== PASSO 11: PROJETIL ACERTA INIMIGO ==========
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

// ========== PASSO 12: ENTRAR NA PORTA OU TOCAR INIMIGO ==========
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

// ========== PASSO 13: INICIAR O JOGO ==========
game.splash("LABIRINTO")
game.splash("Encontra a chave!")
criarChave()
