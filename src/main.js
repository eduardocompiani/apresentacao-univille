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

// Touch/swipe navigation
let touchStartX = 0
let touchStartY = 0

document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
}, { passive: true })

document.addEventListener('touchend', (e) => {
  const deltaX = e.changedTouches[0].clientX - touchStartX
  const deltaY = e.changedTouches[0].clientY - touchStartY

  // Only navigate if horizontal swipe is dominant and long enough
  if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) nextSlide()
    else prevSlide()
  }
}, { passive: true })

// Initialize on load
updateProgress()
updateCounter()
