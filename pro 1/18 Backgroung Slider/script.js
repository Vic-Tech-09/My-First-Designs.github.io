const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++
    console.log(rightBtn)
    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    console.log(rightBtn)
    setBgToBody()
    setActiveSlide()
})
    console.log(rightBtn)
leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide > 0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove ('active'))

    slides[activeSlide].classList.add('active')
}

