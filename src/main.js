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

const progressFill = document.getElementById('progress-fill')
const slideCounter = document.getElementById('slide-counter')

function updateProgress() {
  const percent = ((currentSlide + 1) / totalSlides) * 100
  progressFill.style.width = `${percent}%`
}

function updateCounter() {
  slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`
}

function toggleTheme() {
  const html = document.documentElement
  const current = html.getAttribute('data-theme')
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark')
}

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
