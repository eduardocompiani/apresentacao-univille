# Presentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 13-slide web presentation deployed on Vercel with dark/light theme toggle, keyboard navigation, progress bar, and slide counter.

**Architecture:** Single-page HTML app with all 13 slides as `<section>` elements. CSS custom properties for theming (dark default, light alt). Vanilla JS for navigation (arrow keys), theme toggle (T key), progress bar, and slide counter. Vite for dev server and production build.

**Tech Stack:** HTML, CSS (custom properties), vanilla JS, Vite, Google Fonts (Inter), Vercel for deploy.

**Spec:** `docs/superpowers/specs/2026-03-23-presentation-design.md`

---

## File Structure

| File | Responsibility |
|------|----------------|
| `index.html` | All 13 slides as `<section>` elements, Google Fonts link, script/style imports |
| `src/style.css` | CSS custom properties for both themes, slide layouts, progress bar, counter, typography |
| `src/main.js` | Keyboard navigation (← →), theme toggle (T), progress bar update, slide counter update |
| `public/images/eduardo.jpg` | Placeholder SVG initially (user replaces with real photo) |
| `vite.config.js` | Vite config (minimal, static site) |
| `package.json` | Project metadata, Vite dev dependency, scripts |

---

### Task 1: Vite Project Scaffold

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html` (minimal shell)
- Create: `src/main.js` (empty entry)
- Create: `src/style.css` (empty entry)

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "presentation-univille",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^6.3.5"
  }
}
```

- [ ] **Step 2: Create `vite.config.js`**

```js
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
  },
})
```

- [ ] **Step 3: Create minimal `index.html`**

```html
<!DOCTYPE html>
<html lang="pt-BR" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Programar não é o difícil. Difícil é saber por quê.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/src/style.css" />
</head>
<body>
  <div id="progress-bar"><div id="progress-fill"></div></div>
  <div id="slide-counter"></div>
  <main id="presentation">
    <section class="slide active" data-slide="1">
      <h1>Setup OK</h1>
    </section>
  </main>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Create empty `src/style.css`**

```css
/* Styles will be added in Task 2 */
```

- [ ] **Step 5: Create empty `src/main.js`**

```js
// Navigation and theme logic will be added in Task 3
```

- [ ] **Step 6: Install dependencies**

Run: `npm install`
Expected: `node_modules` created, `package-lock.json` generated.

- [ ] **Step 7: Verify dev server starts**

Run: `npm run dev`
Expected: Vite dev server starts, shows local URL. Open in browser and see "Setup OK".

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json vite.config.js index.html src/main.js src/style.css
git commit -m "feat: scaffold Vite project with minimal HTML shell"
```

---

### Task 2: CSS Theme System and Base Styles

**Files:**
- Create: `src/style.css` (full styles)

- [ ] **Step 1: Write CSS reset and custom properties for dark theme**

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root,
[data-theme="dark"] {
  --bg: #0a0a0f;
  --text: #f0f0f0;
  --text-secondary: #888888;
  --accent: #646cff;
  --accent-gradient: linear-gradient(135deg, #646cff, #9b59b6);
  --positive: #4ade80;
  --negative: #f87171;
  --surface: #1a1a2e;
}

[data-theme="light"] {
  --bg: #fafafa;
  --text: #1a1a1a;
  --text-secondary: #999999;
  --accent: #4f46e5;
  --accent-gradient: linear-gradient(135deg, #4f46e5, #7c3aed);
  --positive: #16a34a;
  --negative: #dc2626;
  --surface: #e0e0e0;
}
```

- [ ] **Step 2: Write base layout styles**

```css
html, body {
  height: 100%;
  overflow: hidden;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

#presentation {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide {
  position: absolute;
  inset: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
}

.slide.active {
  display: flex;
}
```

- [ ] **Step 3: Write progress bar and counter styles**

```css
#progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--surface);
  z-index: 100;
}

#progress-fill {
  height: 100%;
  width: 0%;
  background: var(--accent-gradient);
  border-radius: 0 2px 2px 0;
}

#slide-counter {
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  font-family: monospace;
  font-size: 0.8rem;
  color: var(--text-secondary);
  z-index: 100;
}
```

- [ ] **Step 4: Write typography utility classes**

```css
.slide-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
}

.slide-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-secondary);
}

.section-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
  margin-bottom: 1rem;
}

.accent-gradient {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.quote {
  border-left: 3px solid var(--accent);
  padding-left: 1.5rem;
  font-style: italic;
  font-size: 1.5rem;
  line-height: 1.5;
}

.text-positive { color: var(--positive); }
.text-negative { color: var(--negative); }
```

- [ ] **Step 5: Write slide-specific layout classes**

```css
/* Centered content slide (title, question, quote, Q&A) */
.slide-center {
  text-align: center;
}

/* Two-column layout (myths vs reality) */
.two-columns {
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 900px;
}

.two-columns > div {
  flex: 1;
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 8px;
}

/* Profile layout (photo + info) */
.profile {
  display: flex;
  gap: 2rem;
  align-items: center;
  max-width: 800px;
}

.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  object-fit: cover;
  flex-shrink: 0;
}

.profile-info h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.profile-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

/* Section content (history, future, advice, purpose) */
.section-content {
  max-width: 700px;
  text-align: left;
}

.section-content h2 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
}

.section-content p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

/* List with icons */
.icon-list {
  list-style: none;
  font-size: 1.1rem;
}

.icon-list li {
  margin: 0.5rem 0;
}
```

- [ ] **Step 6: Verify styles load in browser**

Run: `npm run dev`
Expected: Dark background, no visual glitches. "Setup OK" text centered and styled.

- [ ] **Step 7: Commit**

```bash
git add src/style.css
git commit -m "feat: add CSS theme system with dark/light variables and slide layouts"
```

---

### Task 3: JavaScript — Navigation, Theme Toggle, Progress, Counter

**Files:**
- Modify: `src/main.js` (full implementation)

- [ ] **Step 1: Write slide navigation logic**

```js
const slides = document.querySelectorAll('.slide')
const totalSlides = slides.length
let currentSlide = 0

function goToSlide(index) {
  if (index < 0 || index >= totalSlides) return
  slides[currentSlide].classList.remove('active')
  currentSlide = index
  slides[currentSlide].classList.add('active')
  updateProgress()
  updateCounter()
}

function nextSlide() {
  goToSlide(currentSlide + 1)
}

function prevSlide() {
  goToSlide(currentSlide - 1)
}
```

- [ ] **Step 2: Write progress bar and counter update**

```js
const progressFill = document.getElementById('progress-fill')
const slideCounter = document.getElementById('slide-counter')

function updateProgress() {
  const percent = ((currentSlide + 1) / totalSlides) * 100
  progressFill.style.width = `${percent}%`
}

function updateCounter() {
  slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`
}
```

- [ ] **Step 3: Write theme toggle**

```js
function toggleTheme() {
  const html = document.documentElement
  const current = html.getAttribute('data-theme')
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark')
}
```

- [ ] **Step 4: Write keyboard event listener and initialization**

```js
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowRight':
      nextSlide()
      break
    case 'ArrowLeft':
      prevSlide()
      break
    case 't':
    case 'T':
      toggleTheme()
      break
  }
})

// Initialize on load
updateProgress()
updateCounter()
```

- [ ] **Step 5: Verify navigation works**

Run: `npm run dev`
Test: Open browser, press → and ← (only 1 slide for now so just verify no errors in console). Press T to toggle theme. Check progress bar and counter show "1 / 1".

- [ ] **Step 6: Commit**

```bash
git add src/main.js
git commit -m "feat: add keyboard navigation, theme toggle, progress bar, and slide counter"
```

---

### Task 4: Slides 1-3 — Title, Question, Profile

**Files:**
- Modify: `index.html` (replace placeholder slide with real slides 1-3)
- Create: `public/images/eduardo.jpg` (SVG placeholder)

- [ ] **Step 1: Create placeholder photo**

Create `public/images/eduardo.jpg` — actually, since we need a placeholder, create an SVG instead and reference it. Update the img tag to use a simple inline SVG data URI or a placeholder file.

Create `public/images/placeholder-photo.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="60" fill="#1a1a2e"/>
  <circle cx="60" cy="45" r="20" fill="#646cff" opacity="0.5"/>
  <ellipse cx="60" cy="95" rx="35" ry="25" fill="#646cff" opacity="0.3"/>
</svg>
```

- [ ] **Step 2: Add slides 1-3 to `index.html`**

Replace the placeholder `<section>` inside `<main id="presentation">` with:

```html
    <!-- Slide 1: Título -->
    <section class="slide active slide-center" data-slide="1">
      <h1 class="slide-title">
        Programar não é o difícil.<br />
        <span class="accent-gradient">Difícil é saber por quê.</span>
      </h1>
      <p class="slide-subtitle" style="margin-top: 1.5rem;">Eduardo Compiani</p>
    </section>

    <!-- Slide 2: Pergunta provocativa -->
    <section class="slide slide-center" data-slide="2">
      <h1 class="slide-title">
        Vocês acham que o mais importante<br />
        pra conseguir um emprego<br />
        <span class="accent-gradient" style="font-size: 2.8rem;">é saber programar?</span>
      </h1>
    </section>

    <!-- Slide 3: Quem sou eu -->
    <section class="slide" data-slide="3">
      <div class="profile">
        <img
          src="/images/placeholder-photo.svg"
          alt="Eduardo Compiani"
          class="profile-photo"
        />
        <div class="profile-info">
          <h2>Eduardo Compiani</h2>
          <p>Senior Software Engineer — Motorista PX</p>
          <p>10+ anos em tecnologia</p>
          <p>Bacharel em SI — UNIVILLE</p>
          <p>Pós-graduado em Liderança</p>
          <p>Ex-competidor Olimpíada do Conhecimento</p>
        </div>
      </div>
    </section>
```

- [ ] **Step 3: Verify slides 1-3 in browser**

Run: `npm run dev`
Test: See slide 1 (title with gradient). Press → to see slide 2 (question). Press → to see slide 3 (profile with placeholder photo). Counter should show "X / 3". Progress bar should advance.

- [ ] **Step 4: Commit**

```bash
git add index.html public/images/placeholder-photo.svg
git commit -m "feat: add slides 1-3 (title, question, profile with placeholder photo)"
```

---

### Task 5: Slides 4-5 — My Story and Turning Point

**Files:**
- Modify: `index.html` (add slides 4-5)

- [ ] **Step 1: Add slides 4-5 to `index.html`**

Add after slide 3's closing `</section>`:

```html
    <!-- Slide 4: Minha história (início) -->
    <section class="slide" data-slide="4">
      <div class="section-content">
        <p class="section-label">Minha história</p>
        <h2>Sempre fui a criança que desmontava carrinhos pra ver como era por dentro</h2>
        <p style="margin-top: 1rem;">
          Essa curiosidade me levou a um curso de Montagem e Manutenção de computadores
          — e depois à programação. PHP, HTML, CSS, JS.
        </p>
      </div>
    </section>

    <!-- Slide 5: Dificuldades e virada -->
    <section class="slide" data-slide="5">
      <div class="section-content">
        <p class="section-label">Minha história</p>
        <h2>O erro de querer aprender tudo ao mesmo tempo</h2>
        <p style="margin-top: 1rem;">
          Estudava um pouco de cada linguagem e achava que sabia. Até chegar a competição
          estadual — técnico competindo com gente da graduação. Ali eu entendi: preciso me
          estabilizar em uma linguagem e construir uma base sólida.
        </p>
      </div>
    </section>
```

- [ ] **Step 2: Verify slides 4-5 in browser**

Run: `npm run dev`
Test: Navigate to slides 4 and 5. Check section label, title, and body text render correctly. Counter shows "X / 5".

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add slides 4-5 (my story and turning point)"
```

---

### Task 6: Slides 6-8 — Myths, Strengths, Weaknesses

**Files:**
- Modify: `index.html` (add slides 6-8)

- [ ] **Step 1: Add slides 6-8 to `index.html`**

Add after slide 5's closing `</section>`:

```html
    <!-- Slide 6: Mitos vs Realidade -->
    <section class="slide slide-center" data-slide="6">
      <h2 class="slide-title" style="font-size: 1.8rem; margin-bottom: 1.5rem;">Mitos vs Realidade</h2>
      <div class="two-columns">
        <div>
          <p class="text-negative" style="font-weight: 600; margin-bottom: 0.8rem;">O que muitos pensam</p>
          <p style="color: var(--text); font-size: 0.95rem; margin: 0.4rem 0;">"Preciso saber tudo"</p>
          <p style="color: var(--text); font-size: 0.95rem; margin: 0.4rem 0;">"Preciso ser muito bom antes de entrar no mercado"</p>
        </div>
        <div>
          <p class="text-positive" style="font-weight: 600; margin-bottom: 0.8rem;">A realidade</p>
          <p style="color: var(--text); font-size: 0.95rem; margin: 0.4rem 0;">Você aprende trabalhando</p>
          <p style="color: var(--text); font-size: 0.95rem; margin: 0.4rem 0;">Resolver problemas > saber tudo</p>
        </div>
      </div>
    </section>

    <!-- Slide 7: O que faz alguém se destacar -->
    <section class="slide slide-center" data-slide="7">
      <h2 class="slide-title" style="font-size: 1.8rem; margin-bottom: 1.5rem;">O que faz alguém se destacar</h2>
      <ul class="icon-list text-positive">
        <li>✓ Curiosidade</li>
        <li>✓ Consistência</li>
        <li>✓ Saber explicar o que fez</li>
        <li>✓ Iniciativa</li>
      </ul>
    </section>

    <!-- Slide 8: O que atrasa -->
    <section class="slide slide-center" data-slide="8">
      <h2 class="slide-title" style="font-size: 1.8rem; margin-bottom: 1.5rem;">O que atrasa</h2>
      <ul class="icon-list text-negative">
        <li>✗ Passividade</li>
        <li>✗ Medo de errar</li>
        <li>✗ Só consumir conteúdo (sem praticar)</li>
      </ul>
    </section>
```

- [ ] **Step 2: Verify slides 6-8 in browser**

Run: `npm run dev`
Test: Slide 6 shows two columns with red/green headers. Slide 7 shows green checklist. Slide 8 shows red X list. Counter shows "X / 8".

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add slides 6-8 (myths vs reality, strengths, weaknesses)"
```

---

### Task 7: Slides 9-10 — Future and Advice

**Files:**
- Modify: `index.html` (add slides 9-10)

- [ ] **Step 1: Add slides 9-10 to `index.html`**

Add after slide 8's closing `</section>`:

```html
    <!-- Slide 9: O futuro da área -->
    <section class="slide" data-slide="9">
      <div class="section-content">
        <p class="section-label">O futuro da área</p>
        <h2>O que está mudando</h2>
        <ul class="icon-list" style="margin-top: 1rem; color: var(--text);">
          <li style="margin: 0.8rem 0;">IA como ferramenta — não como inimiga</li>
          <li style="margin: 0.8rem 0;">Desenvolvedor como resolvedor de problemas</li>
          <li style="margin: 0.8rem 0;">Importância de visão de produto</li>
        </ul>
      </div>
    </section>

    <!-- Slide 10: O que eu faria hoje -->
    <section class="slide" data-slide="10">
      <div class="section-content">
        <p class="section-label">Se eu estivesse no 1º semestre</p>
        <h2>O que eu faria hoje</h2>
        <ul class="icon-list" style="margin-top: 1rem; color: var(--text);">
          <li style="margin: 0.8rem 0;">Focar em fundamentos</li>
          <li style="margin: 0.8rem 0;">Construir projetos simples</li>
          <li style="margin: 0.8rem 0;">Errar rápido e aprender</li>
          <li style="margin: 0.8rem 0;">Desenvolver consistência</li>
        </ul>
      </div>
    </section>
```

- [ ] **Step 2: Verify slides 9-10 in browser**

Run: `npm run dev`
Test: Both slides show section label, title, and bullet list. Counter shows "X / 10".

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add slides 9-10 (future of the field and advice)"
```

---

### Task 8: Slides 11-13 — Purpose, Final Quote, Q&A

**Files:**
- Modify: `index.html` (add slides 11-13)

- [ ] **Step 1: Add slides 11-13 to `index.html`**

Add after slide 10's closing `</section>`:

```html
    <!-- Slide 11: Propósito na prática -->
    <section class="slide" data-slide="11">
      <div class="section-content">
        <p class="section-label">Propósito na prática</p>
        <h2>Por que eu faço o que faço</h2>
        <p style="margin-top: 1rem;">
          A MotoristaPX conecta motoristas com transportadoras.<br />
          Propósito da empresa: <strong>"Ser amado pelos motoristas e ajudantes"</strong>
        </p>
        <p style="margin-top: 1rem;">
          Meu pai é caminhoneiro aposentado. Hoje eu construo tecnologia
          pra melhorar a vida de motoristas como ele.
        </p>
        <p class="accent-gradient" style="margin-top: 1.5rem; font-size: 1.3rem; font-weight: 700;">
          Programar é o meio. O propósito é o motor.
        </p>
      </div>
    </section>

    <!-- Slide 12: Citação final -->
    <section class="slide slide-center" data-slide="12">
      <blockquote class="quote">
        "Vocês não precisam ser os melhores agora<br />
        — só não podem parar"
      </blockquote>
    </section>

    <!-- Slide 13: Q&A -->
    <section class="slide slide-center" data-slide="13">
      <h1 class="slide-title">Perguntas?</h1>
      <p class="slide-subtitle" style="margin-top: 0.5rem;">Bora trocar uma ideia</p>
    </section>
```

- [ ] **Step 2: Verify all 13 slides in browser**

Run: `npm run dev`
Test: Navigate through all 13 slides with arrow keys. Verify:
- Slide 11: purpose section with gradient closing phrase
- Slide 12: centered quote with accent border
- Slide 13: "Perguntas?" title
- Counter shows "X / 13" throughout
- Progress bar reaches 100% on slide 13
- Toggle theme with T on every slide

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add slides 11-13 (purpose, final quote, Q&A) — all 13 slides complete"
```

---

### Task 9: Polish and Production Build

**Files:**
- Modify: `index.html` (add meta tags, favicon)
- Create: `.gitignore`

- [ ] **Step 1: Create `.gitignore`**

```
node_modules
dist
.superpowers
```

- [ ] **Step 2: Add meta tags to `index.html`**

Add inside `<head>`, after the `<title>`:

```html
  <meta name="description" content="Palestra: Programar não é o difícil. Difícil é saber por quê — Eduardo Compiani" />
  <meta name="theme-color" content="#0a0a0f" />
```

- [ ] **Step 3: Test production build**

Run: `npm run build`
Expected: `dist/` directory created with optimized HTML, CSS, JS files.

Run: `npm run preview`
Expected: Preview server starts. Open in browser, all 13 slides work, navigation works, theme toggle works, progress and counter work.

- [ ] **Step 4: Commit**

```bash
git add .gitignore index.html
git commit -m "feat: add meta tags, gitignore, verify production build"
```

---

### Task 10: Photo Swap Instructions

**Files:**
- None created (documentation only in this plan)

The placeholder SVG is at `public/images/placeholder-photo.svg`. When the user is ready:

- [ ] **Step 1: Document the photo swap process**

To replace the placeholder:
1. Save your photo as `public/images/eduardo.jpg`
2. In `index.html`, change `src="/images/placeholder-photo.svg"` to `src="/images/eduardo.jpg"`
3. Run `npm run dev` to verify it looks correct
4. Commit: `git add public/images/eduardo.jpg index.html && git commit -m "feat: add real profile photo"`

- [ ] **Step 2: Commit any remaining changes**

```bash
git status
# Commit anything outstanding
```
