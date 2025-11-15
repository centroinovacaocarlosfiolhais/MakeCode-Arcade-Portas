// ========================================
// JOGO DE LABIRINTO - MAKECODE ARCADE
// Versão Incremental - Passo a Passo
// ========================================

// ========================================
// PASSO 1: CRIAR O JOGADOR
// ========================================

let jogador = sprites.create(img`
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

// Fazer o jogador mover com as setas
controller.moveSprite(jogador, 80, 80)

// Não deixar sair do ecrã
jogador.setStayInScreen(true)

// Cor de fundo
scene.setBackgroundColor(9)

// Sistema de vidas e pontos
info.setLife(3)
info.setScore(0)


// ========================================
// PASSO 2: VARIÁVEIS DO JOGO
// ========================================

let chave: Sprite = null
let porta: Sprite = null
let inimigo1: Sprite = null
let inimigo2: Sprite = null
let inimigo3: Sprite = null
let inimigo4: Sprite = null
let boss: Sprite = null

let chaveApanhada = false
let nivelAtual = 1
let vidaBoss = 5


// ========================================
// PASSO 3: CRIAR A PRIMEIRA CHAVE
// ========================================

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


// ========================================
// PASSO 4: QUANDO APANHA A CHAVE
// ========================================

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    chave.destroy()
    chaveApanhada = true
    game.splash("Chave apanhada!")

    // Criar a porta
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

    // Criar inimigos conforme o nível
    if (nivelAtual == 1) {
        // NÍVEL 1: 2 inimigos lentos
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

    } else if (nivelAtual == 2) {
        // NÍVEL 2: 4 inimigos rápidos
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

    } else if (nivelAtual == 3) {
        // NÍVEL 3: BOSS FINAL
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
        game.splash("BOSS CHEGOU!")
    }
})


// ========================================
// PASSO 5: QUANDO TOCA NA PORTA OU INIMIGO
// ========================================

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == porta && chaveApanhada) {
        // ENTROU NA PORTA - COMPLETAR NÍVEL

        // Destruir tudo do nível anterior
        porta.destroy()
        if (inimigo1) inimigo1.destroy()
        if (inimigo2) inimigo2.destroy()
        if (inimigo3) inimigo3.destroy()
        if (inimigo4) inimigo4.destroy()

        if (nivelAtual < 3) {
            // Passar ao próximo nível
            info.changeScoreBy(50)
            game.splash("Nivel " + nivelAtual + " completo!")
            nivelAtual = nivelAtual + 1
            chaveApanhada = false
            jogador.setPosition(80, 60)

            // Criar nova chave
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
        } else {
            // Ganhou o jogo todo!
            game.over(true, effects.confetti)
        }

    } else if (otherSprite != porta) {
        // TOCOU EM INIMIGO - PERDE VIDA
        info.changeLifeBy(-1)
        scene.cameraShake(4, 200)
        otherSprite.setPosition(randint(10, 150), randint(10, 110))
        pause(500)
    }
})


// ========================================
// PASSO 6: DISPARAR TIROS
// ========================================

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

    // Direção do tiro
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


// ========================================
// PASSO 7: TIROS MATAM INIMIGOS
// ========================================

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()

    if (otherSprite == boss) {
        // Boss especial - precisa 5 tiros
        vidaBoss = vidaBoss - 1
        if (vidaBoss <= 0) {
            info.changeScoreBy(100)
            game.splash("Boss derrotado!", "Ele voltou!")
            vidaBoss = 5
            boss.setPosition(porta.x, porta.y)
        }
    } else if (otherSprite != porta) {
        // Inimigo normal - morre com 1 tiro
        otherSprite.destroy(effects.fire, 100)
        info.changeScoreBy(10)
    }
})


// ========================================
// MENSAGENS DE INÍCIO
// ========================================

game.splash("LABIRINTO")
game.splash("Encontra a chave!")
game.splash("Derrota os inimigos!")
game.splash("Usa as setas e botão A")
