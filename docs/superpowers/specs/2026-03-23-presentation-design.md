# Spec: Apresentação Web — "Programar não é o difícil. Difícil é saber por quê"

## Resumo

Apresentação web para palestra direcionada a alunos do 1º semestre de Engenharia de Software na UNIVILLE. Construída com HTML/CSS/JS + Vite, deploy na Vercel com subdomínio custom.

## Contexto

**Palestrante:** Eduardo Compiani — Senior Software Engineer na Motorista PX, 10+ anos de experiência, formado em SI pela UNIVILLE, pós-graduado em Liderança, ex-competidor da Olimpíada do Conhecimento (SENAI).

**Público:** Alunos do 1º semestre, pouca ou nenhuma experiência prática, possível insegurança sobre carreira.

**Duração:** 30-45 min de conteúdo + Q&A para fechar em ~60 min.

**Objetivo:** Alunos saem com mais clareza sobre carreira, menos ansiedade, um caminho prático de evolução e uma mudança de mentalidade.

## Stack Técnica

- **HTML/CSS/JS puro** — zero dependências runtime
- **Vite** — dev server com hot reload + bundler para produção
- **Google Fonts (Inter)** — tipografia
- **Deploy:** Vercel conectada ao repo GitHub, build `vite build` → `dist/`

## Estrutura de Arquivos

```
presentation/
├── index.html           # HTML principal com todos os 12 slides
├── src/
│   ├── main.js          # Navegação, progresso, contador, toggle tema
│   └── style.css        # Estilos: temas, layouts, responsivo
├── public/
│   └── images/
│       └── eduardo.jpg  # Foto do palestrante
├── package.json
└── vite.config.js
```

## Identidade Visual

### Paleta de Cores

**Tema Escuro (padrão):**
- Fundo: `#0a0a0f`
- Texto principal: `#f0f0f0`
- Texto secundário: `#888888`
- Accent: `#646cff`
- Gradiente accent: `linear-gradient(135deg, #646cff, #9b59b6)`
- Positivo (✓): `#4ade80`
- Negativo (✗): `#f87171`
- Superfície: `#1a1a2e`

**Tema Claro (alternativo):**
- Fundo: `#fafafa`
- Texto principal: `#1a1a1a`
- Texto secundário: `#999999`
- Accent: `#4f46e5`
- Gradiente accent: `linear-gradient(135deg, #4f46e5, #7c3aed)`
- Positivo (✓): `#16a34a`
- Negativo (✗): `#dc2626`
- Superfície: `#e0e0e0`

### Tipografia

- **Fonte:** Inter (Google Fonts)
- **Títulos:** 700 weight, tamanho grande
- **Subtítulos/apoio:** 400 weight, cor secundária
- **Corpo:** 400 weight, line-height 1.6

### Toggle de Tema

- Tecla **"T"** alterna entre dark/light
- Padrão: escuro ao carregar
- Sem persistência — recarregar volta ao escuro
- Implementado via `data-theme` no `<html>` e CSS custom properties

## Funcionalidades

### Navegação
- Setas do teclado `←` `→` para navegar entre slides
- Cada slide é uma `<section>` em `index.html`, visibilidade controlada por JS

### Barra de Progresso
- Barra fina no topo da tela
- Gradiente accent, preenchimento proporcional ao slide atual
- Discreta, não compete com o conteúdo

### Contador de Slides
- Formato: `3 / 12`
- Canto superior direito, fonte monospace, cor secundária

## Slides (12 total)

### Slide 1 — Título
- Layout: centralizado
- Conteúdo: "Programar não é o difícil." (branco) + "Difícil é saber por quê." (gradiente accent)
- Abaixo: "Eduardo Compiani" (cor secundária)

### Slide 2 — Pergunta provocativa
- Layout: centralizado, texto grande
- Conteúdo: "Vocês acham que o mais importante pra conseguir um emprego é saber programar?" (última parte em gradiente accent)

### Slide 3 — Quem sou eu
- Layout: foto circular à esquerda + informações à direita
- Foto: `eduardo.jpg`, borda accent, 120px circular
- Info: nome (título), cargo, experiência, formação (UNIVILLE), pós-graduação, Olimpíada do Conhecimento

### Slide 4 — Minha história (início)
- Layout: label de seção + título forte + texto de apoio
- Label: "MINHA HISTÓRIA" (accent, uppercase, letter-spacing)
- Conteúdo: curiosidade desde criança → curso de montagem/manutenção → programação (PHP, HTML, CSS, JS)

### Slide 5 — Dificuldades e virada
- Layout: mesmo padrão do slide 4
- Conteúdo: erro de querer aprender tudo sem base sólida → realidade da competição estadual (técnico vs graduação) → aprendizado de focar em uma linguagem

### Slide 6 — Mitos vs Realidade
- Layout: duas colunas
- Coluna esquerda (vermelho): "O que muitos pensam" — "Preciso saber tudo", "Preciso ser muito bom antes de entrar no mercado"
- Coluna direita (verde): "A realidade" — "Você aprende trabalhando", "Resolver problemas > saber tudo"

### Slide 7 — O que faz alguém se destacar
- Layout: lista com ícones ✓ (verde)
- Itens: Curiosidade, Consistência, Saber explicar o que fez, Iniciativa

### Slide 8 — O que atrasa
- Layout: lista com ícones ✗ (vermelho)
- Itens: Passividade, Medo de errar, Só consumir conteúdo (sem praticar)

### Slide 9 — O futuro da área
- Layout: label de seção + tópicos
- Conteúdo: IA como ferramenta (não inimiga), desenvolvedor como resolvedor de problemas, importância de visão de produto

### Slide 10 — O que eu faria hoje (se estivesse no 1º semestre)
- Layout: label de seção + tópicos
- Conteúdo: Focar em fundamentos, Construir projetos simples, Errar rápido e aprender, Desenvolver consistência

### Slide 11 — Citação final
- Layout: centralizado, citação com borda accent à esquerda
- Conteúdo: "Vocês não precisam ser os melhores agora — só não podem parar" (itálico)

### Slide 12 — Q&A
- Layout: centralizado, simples
- Conteúdo: "Perguntas?" (título grande) + "Bora trocar uma ideia" (secundário)

## Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `→` | Próximo slide |
| `←` | Slide anterior |
| `T` | Toggle dark/light |

## Deploy

- **Plataforma:** Vercel
- **Fonte:** Repositório GitHub
- **Build command:** `vite build`
- **Output directory:** `dist/`
- **Subdomínio:** Custom, configurado no painel Vercel
