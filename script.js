const openBtn = document.querySelector('.nav__toggle--open')
const closeBtn = document.querySelector('.nav__toggle--close')
const nav = document.querySelector('.nav')

function openMenu(){
 nav.classList.add('active')
 openBtn.style.display = 'none'
 closeBtn.style.display = 'block'
}

function closeMenu(){
 nav.classList.remove('active')
 openBtn.style.display = 'block'
 closeBtn.style.display = 'none'
}

openBtn.addEventListener('click', () => {
 openMenu()
})

closeBtn.addEventListener('click', () => {
 closeMenu()
})