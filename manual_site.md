# 📱 MANUAL DO SITE INTERATIVO
## Guia de Aula - Jogo de Labirinto

---

## 🎯 FUNCIONALIDADES PRINCIPAIS

### 1. **Navegação entre Sessões**
- 2 botões no topo: **Sessão 1** e **Sessão 2**
- Clica para alternar entre as sessões
- 14 passos totais (6 na Sessão 1, 8 na Sessão 2)

### 2. **Barra de Progresso**
- Mostra visualmente em que ponto da aula estás
- Atualiza automaticamente conforme avanças

### 3. **Snippets de Código**
- Código formatado com syntax highlighting
- Botão **"📋 Copiar"** em cada bloco de código
- Clica para copiar instantaneamente
- Feedback visual quando copiado

### 4. **Upload de Imagens**
- Campo para adicionar screenshots dos blocos do MakeCode
- Clica em **"📤 Escolher Imagem"**
- Pré-visualização automática
- Botão **"🗑️ Remover"** se quiseres apagar

### 5. **Guardar Progresso**
- Botão **"💾 Guardar Progresso"**
- Guarda automaticamente:
  - Passo atual
  - Sessão atual
  - Todas as imagens carregadas
- Usa localStorage (navegador)
- Ao voltar ao site, continuas onde paraste!

### 6. **Exportar PDF**
- Botão **"📄 Exportar PDF"**
- Gera PDF com todo o conteúdo
- Inclui as imagens que carregaste
- Nome: `Guia_Labirinto_MakeCode.pdf`

---

## 🚀 COMO USAR EM AULA

### **Antes da Aula:**

1. **Abre o ficheiro `guia_interativo.html` no browser**
   - Chrome, Firefox, Edge (qualquer browser moderno)

2. **Testa a navegação**
   - Clica nos botões ⬅️ e ➡️
   - Experimenta mudar de sessão

3. **Prepara screenshots (opcional)**
   - Tira prints dos blocos no MakeCode
   - Carrega no site antes da aula
   - Guarda o progresso

### **Durante a Aula:**

#### **Projetar o Site:**
- Liga o projetor/TV
- Abre o site em **modo de ecrã completo** (F11)
- Usa os botões de navegação para avançar

#### **Mostrar Código:**
- Cada passo tem snippets prontos a copiar
- Projeta o código no quadro
- Alunos copiam para o MakeCode

#### **Adicionar Screenshots:**
- Quando criares blocos no MakeCode
- Tira screenshot (Win + Shift + S)
- Carrega no site
- Mostra aos alunos visualmente

#### **Guardar Durante a Aula:**
- Clica em **"💾 Guardar"** periodicamente
- Se o computador crashar, não perdes nada
- No dia seguinte, continuas onde paraste

### **Depois da Aula:**

1. **Exporta PDF**
   - Clica em **"📄 Exportar PDF"**
   - Envia aos alunos por email
   - Ou partilha no Google Classroom

2. **Partilha o HTML**
   - Envia o ficheiro .html aos alunos
   - Podem abrir no browser deles
   - Estudar em casa ao seu ritmo

---

## 💡 DICAS E TRUQUES

### **Navegação Rápida:**
```
⬅️ Anterior = Volta um passo
➡️ Próximo = Avança um passo
```

### **Atalhos de Teclado:**
- **F11** = Ecrã completo
- **Ctrl +** = Aumenta zoom
- **Ctrl -** = Diminui zoom
- **Ctrl 0** = Zoom normal

### **Screenshots Perfeitos:**
1. Cria o bloco no MakeCode
2. Win + Shift + S (Windows)
3. Cmd + Shift + 4 (Mac)
4. Seleciona apenas a área do código
5. Carrega no site

### **Organização:**
- **Sessão 1** = Estrutura base (variáveis, jogador, funções)
- **Sessão 2** = Lógica do jogo (eventos, colisões, teste)

---

## 🎨 PERSONALIZAÇÃO

### **Cores do Site:**
O site usa um esquema roxo-azul profissional. Para mudar:

1. Abre o ficheiro HTML num editor
2. Procura por `background: #667eea`
3. Muda para a cor que quiseres
4. Guarda e recarrega

### **Adicionar Mais Passos:**

Para adicionar passos extra (ex: customizações):

1. Copia um bloco `<div class="step" data-step="X">`
2. Cola no fim da sessão
3. Muda o número do data-step
4. Edita o conteúdo
5. Atualiza `totalSteps` no JavaScript

---

## 🔧 RESOLUÇÃO DE PROBLEMAS

### **PDF não gera:**
- Verifica ligação à internet (precisa da biblioteca)
- Tenta noutro browser
- Alternativa: Ctrl+P → Imprimir para PDF

### **Imagens não aparecem:**
- Verifica se são PNG, JPG ou GIF
- Tamanho máximo recomendado: 5MB
- Tenta comprimir a imagem

### **Progresso não guarda:**
- Verifica se cookies estão ativados
- Usa o mesmo browser sempre
- Não uses modo privado/anónimo

### **Site lento:**
- Muitas imagens grandes podem lentificar
- Comprime imagens antes de carregar
- Fecha outros tabs do browser

---

## 📊 ESTRUTURA DAS SESSÕES

### **SESSÃO 1 (2 horas)**
```
Passo 1: Introdução e Setup (15min)
Passo 2: Declarar Variáveis (10min)
Passo 3: Criar Jogador (15min)
Passo 4: Funções Chave/Porta (20min)
Passo 5: Funções Inimigos (30min)
Passo 6: Pausa e Revisão (10min)
```

### **SESSÃO 2 (2 horas)**
```
Passo 7: Criar Boss (15min)
Passo 8: Disparar Projéteis (20min)
Passo 9: Apanhar Chave (15min)
Passo 10: Acertar Inimigos (20min)
Passo 11: Colisões (20min)
Passo 12: Iniciar Jogo (5min)
Passo 13: Teste e Customização (25min)
Passo 14: Apresentação Final (15min)
```

---

## 🌟 FUNCIONALIDADES ESPECIAIS

### **Auto-Save:**
- Guarda automaticamente quando carregas imagens
- Não precisas de clicar no botão guardar

### **Responsive:**
- Funciona em tablets
- Funciona em telemóveis
- Layout adapta-se ao ecrã

### **Modo Impressão:**
- Quando exportas PDF ou imprimes
- Esconde botões desnecessários
- Formato otimizado para papel

### **Notificações:**
- Pop-up no canto superior direito
- Confirma quando guardas
- Confirma quando copias código
- Desaparece sozinha após 3 segundos

---

## 🎓 CENÁRIOS DE USO

### **Cenário 1: Aula Presencial**
1. Projeta o site
2. Navega passo a passo
3. Alunos copiam código
4. Tiras screenshots e mostras
5. No fim, exportas PDF para partilhar

### **Cenário 2: Aula Online**
1. Partilhas ecrã com o site
2. Alunos seguem em tempo real
3. Usas "Copiar" e colas no chat
4. Envias PDF no fim da sessão

### **Cenário 3: Estudo Individual**
1. Envias HTML aos alunos
2. Abrem no browser
3. Seguem ao próprio ritmo
4. Guardam progresso
5. Continuam noutro dia

### **Cenário 4: Workshop**
1. Imprimes handouts do PDF
2. Projetas o site para referência visual
3. Participantes têm guia físico
4. Conseguem anotar no papel

---

## 📱 COMPATIBILIDADE

### **Browsers Testados:**
✅ Chrome (recomendado)  
✅ Firefox  
✅ Edge  
✅ Safari  
⚠️ IE11 (funciona mas sem algumas animações)

### **Sistemas Operativos:**
✅ Windows 10/11  
✅ macOS  
✅ Linux  
✅ ChromeOS  

### **Dispositivos:**
✅ Desktop/Laptop  
✅ Tablet (iPad, Android)  
⚠️ Smartphone (funcional mas pequeno)

---

## 🔒 PRIVACIDADE

### **Onde é guardado o progresso?**
- localStorage do browser
- Apenas no teu computador
- Não é enviado para nenhum servidor
- Não partilhado entre dispositivos

### **As imagens são privadas?**
- Sim, ficam no teu browser
- Convertidas para Base64
- Não são carregadas para a nuvem
- Apagadas se limpares cookies

### **É preciso internet?**
- Não para usar o site básico
- Sim para exportar PDF (biblioteca externa)
- Sim para syntax highlighting completo

---

## 📞 APOIO

### **Problemas Técnicos:**
- Atualiza o browser
- Limpa cache (Ctrl + F5)
- Tenta noutro browser
- Verifica consola (F12) para erros

### **Melhorias Futuras:**
- [ ] Modo escuro
- [ ] Mais temas de cores
- [ ] Temporizador por passo
- [ ] Quiz no fim de cada sessão
- [ ] Modo offline completo

---

## 🎉 CONCLUSÃO

Este site interativo foi desenhado para:
- ✅ Facilitar o ensino
- ✅ Organizar o conteúdo
- ✅ Poupar tempo na preparação
- ✅ Melhorar a experiência dos alunos
- ✅ Ser reutilizável

**Diverte-te a ensinar!** 🚀

---

# RESUMO RÁPIDO

1. **Abre** guia_interativo.html
2. **Navega** com ⬅️ ➡️
3. **Copia** código com 📋
4. **Carrega** imagens com 📤
5. **Guarda** progresso com 💾
6. **Exporta** PDF com 📄

**É assim tão simples!** 🎯
