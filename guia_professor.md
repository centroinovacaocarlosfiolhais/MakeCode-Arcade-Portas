# 👨‍🏫 GUIA DO PROFESSOR - JOGO DE LABIRINTO
## Metodologia de Ensino | Duração sugerida: 90-120 minutos

---

## 🎯 OBJETIVOS DA AULA

### Objetivos Técnicos:
- Compreender variáveis e tipos de dados
- Entender funções e sua utilidade
- Aprender condicionais (if/else)
- Trabalhar com colisões entre sprites
- Compreender coordenadas (x, y) e velocidade (vx, vy)

### Objetivos Pedagógicos:
- Desenvolver pensamento lógico
- Estimular criatividade na programação
- Trabalhar resolução de problemas
- Promover autonomia e experimentação
- Incentivar colaboração entre pares

---

## 📋 PLANO DE AULA

### 1️⃣ INTRODUÇÃO (10-15 min)

**Mostrar o jogo completo:**
1. Abre o projeto final no MakeCode Arcade
2. Joga alguns minutos mostrando as mecânicas
3. Explica os objetivos: chave → porta → próximo nível

**Perguntas para engajar:**
- "Que jogos já jogaram parecidos?"
- "O que acham que é preciso programar?"
- "Quais as partes mais difíceis de fazer?"

### 2️⃣ CONCEITOS BASE (15 min)

**Explicar conceitos essenciais:**

**Variáveis:**
```
Usar analogia da caixa:
"Imaginem uma caixa com uma etiqueta 'jogador'. 
Dentro está a informação toda do jogador."
```

**Sprites:**
```
"São os personagens e objetos do jogo.
Como peças de LEGO que colocamos no ecrã."
```

**Coordenadas:**
```
Desenhar no quadro:
   0 -----> X (esquerda-direita)
   |
   |
   v
   Y (cima-baixo)
```

**Colisões:**
```
"Como o jogo sabe quando dois objetos se tocam?
onOverlap = quando overlap (sobrepor)"
```

### 3️⃣ DESENVOLVIMENTO GUIADO (45-60 min)

**Estratégia de cópia:**

**Método "Eu faço, Tu fazes":**
1. **Professor faz** um bloco no projetor
2. **Explica** linha a linha
3. **Alunos copiam** no seu computador
4. **Testar** imediatamente

**Ordem recomendada:**

**FASE 1 - Fundamentos (15 min)**
- ✅ Variáveis (PASSO 1)
- ✅ Criar jogador (PASSO 2)
- ✅ Testar movimento
- 💬 "Conseguem mover o jogador? Experimentem!"

**FASE 2 - Objetos do jogo (15 min)**
- ✅ Criar chave (PASSO 3)
- ✅ Criar porta (PASSO 4)
- ✅ Testar se aparecem
- 💬 "Onde apareceu a chave? Está em sítio diferente?"

**FASE 3 - Inimigos (15 min)**
- ✅ Função destruir (PASSO 5)
- ✅ Inimigos nível 1 (PASSO 5)
- ✅ Inimigos nível 2 (PASSO 5)
- ✅ Boss (PASSO 6)
- 💬 "Os inimigos perseguem-vos? Experimentem correr!"

**FASE 4 - Interações (15 min)**
- ✅ Disparar (PASSO 7)
- ✅ Apanhar chave (PASSO 8)
- ✅ Acertar inimigos (PASSO 9)
- ✅ Colisões (PASSO 10)
- ✅ Iniciar jogo (PASSO 11)
- 💬 "Joguem e testem tudo!"

### 4️⃣ TESTE E DEBUG (10-15 min)

**Problemas comuns:**

**Erro: Variável implicitly has type 'any'**
```
Solução: Adicionar `: Sprite` ou `: Sprite = null`
let jogador: Sprite = null
```

**Jogador não se move:**
```
Verificar:
- controller.moveSprite(jogador, 80, 80)
- Está depois de criar o jogador?
```

**Inimigos não aparecem:**
```
Verificar:
- As funções foram criadas?
- São chamadas quando apanha a chave?
```

**Projéteis não disparam:**
```
Verificar:
- Código está dentro de controller.A.onEvent?
- O jogador já foi criado?
```

### 5️⃣ CUSTOMIZAÇÃO (20-30 min)

**Deixar os alunos experimentarem:**

**Nível Básico:**
- Mudar cores das sprites
- Ajustar velocidades
- Mudar número de vidas

**Nível Intermédio:**
- Adicionar sons
- Mudar sistema de pontos
- Criar power-ups simples

**Nível Avançado:**
- Adicionar mais níveis
- Criar inimigos que atiram
- Sistema de tempo

**Circular pela sala:**
- Ajudar individualmente
- Celebrar customizações criativas
- Incentivar partilha entre alunos

### 6️⃣ APRESENTAÇÃO (10-15 min)

**Voluntários mostram suas versões:**
- 3-5 alunos mostram no projetor
- Explicam o que mudaram
- Classe joga e dá feedback

---

## 🎓 DICAS PEDAGÓGICAS

### ✅ BOM FAZER:

**Durante a explicação:**
- Usar analogias do dia-a-dia
- Desenhar diagramas no quadro
- Testar SEMPRE depois de cada passo
- Celebrar pequenas vitórias

**Durante a cópia:**
- Andar pela sala constantemente
- Ajudar quem fica para trás
- Promover ajuda entre colegas
- Ser paciente com erros

**Durante customização:**
- Encorajar experimentação
- "E se fizéssemos X?"
- Não há respostas erradas
- Falhar faz parte!

### ❌ EVITAR:

- Ir demasiado rápido
- Assumir conhecimento prévio
- Criticar erros negativamente
- Dar soluções sem explicar
- Fazer tudo pelos alunos

---

## 📊 AVALIAÇÃO

### Critérios de sucesso:

**Mínimo (Todos devem atingir):**
- ✅ Jogo funciona nos 3 níveis
- ✅ Compreende o código básico
- ✅ Consegue explicar uma função

**Esperado (Maioria deve atingir):**
- ✅ Fez alguma customização
- ✅ Testou e corrigiu erros
- ✅ Explica lógica das colisões

**Excelência (Alguns podem atingir):**
- ✅ Customização criativa/original
- ✅ Ajudou colegas
- ✅ Adicionou funcionalidades novas

---

## 🛠️ RESOLUÇÃO DE PROBLEMAS

### Se os alunos estão perdidos:
1. Parar a turma
2. Rever conceito em conjunto
3. Fazer exemplo no quadro
4. Recomeçar esse passo

### Se alunos avançados acabam cedo:
- Desafiar com customizações avançadas
- Pedir para ajudar colegas
- Propor adicionar 4º nível
- Criar inimigos com comportamentos diferentes

### Se o código não funciona:
1. Verificar erros a vermelho
2. Comparar com código de referência
3. Usar o debugger do MakeCode
4. Último recurso: recomeçar esse passo

---

## 💡 EXTENSÕES E FOLLOW-UP

### Para próximas aulas:

**Aula seguinte:**
- Adicionar tilemaps (labirintos reais)
- Sistema de menu
- Música de fundo

**Projeto final:**
- Criar jogo próprio
- Apresentar à turma
- Partilhar online

**Competição:**
- Quem consegue maior pontuação?
- Melhor customização?
- Nível mais criativo?

---

## 📚 RECURSOS ADICIONAIS

### Para o professor:

**Documentação:**
- https://arcade.makecode.com/
- https://arcade.makecode.com/courses/csintro

**Tutoriais:**
- Space Explorer
- Happy Flower
- Star Shelf

**Comunidade:**
- Fórum: https://forum.makecode.com/
- Discord oficial do MakeCode

### Para os alunos:

**Desafios extras:**
- Skilmap do MakeCode Arcade
- Game Lab tutorials
- Chase the Pizza tutorial

---

## 🎯 DIFERENCIAÇÃO

### Para alunos com dificuldades:
- Dar código parcialmente completo
- Emparelhar com colega mais forte
- Focar só nas funcionalidades base
- Simplificar: remover boss, ter só 2 níveis

### Para alunos avançados:
- Desafiar a adicionar features novas
- Propor otimizações
- Criar versão com physics
- Adicionar power-ups complexos

---

## 📝 CHECKLIST PRÉ-AULA

**Preparação técnica:**
- [ ] Todos os computadores têm internet
- [ ] MakeCode Arcade funciona em todos
- [ ] Projetor está a funcionar
- [ ] Código de referência está pronto

**Preparação pedagógica:**
- [ ] Guia do aluno impresso (opcional)
- [ ] Exemplos de customização preparados
- [ ] Tempo calculado por fase
- [ ] Plano B se houver problemas técnicos

**Durante a aula:**
- [ ] Energia positiva e encorajamento
- [ ] Paciência com ritmos diferentes
- [ ] Circular pela sala constantemente
- [ ] Celebrar sucessos pequenos e grandes

---

## 🌟 MENSAGEM FINAL

Esta aula não é só sobre programação - é sobre:
- **Resolver problemas** criativamente
- **Persistir** quando algo não funciona
- **Colaborar** e ajudar colegas
- **Criar** algo divertido e pessoal

O objetivo não é fazer todos iguais, mas sim dar ferramentas para cada um criar a sua versão única!

**Boa aula!** 🚀

---

## 📞 APOIO

Se precisar de ajuda:
- Consultar documentação do MakeCode
- Fórum da comunidade
- Adaptar a aula ao ritmo da turma
- Não ter medo de improvisar!

Lembra-te: **Tu és o especialista na tua turma!** 
Este guia é uma sugestão, adapta como achares melhor. 💪

---

# BOA SORTE! 🎓🎮
