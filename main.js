const btnMenuOpen = document.querySelector('.open-menu')
const btnMenuClose = document.querySelector('.close-menu')
const menuLinks = document.querySelectorAll('.menu-links li')
const btnWhatsapp = document.querySelectorAll('button.whatsapp')

function changeHeaderColor() {
  const nav = document.querySelector('#navigation')
  if (scrollY > 0) nav.classList.add('scroll')
  else nav.classList.remove('scroll')
}

function showTopButton() {
  const topBtn = document.querySelector('#back-top-button')
  if (scrollY > 400) topBtn.classList.add('show')
  else topBtn.classList.remove('show')
}

function onScroll() {
  changeHeaderColor();
  showTopButton()
}

function openMenu() {
  const body = document.querySelector('body')
  body.classList.add('menu-expanded')
}

function closeMenu() {
  const body = document.querySelector('body')
  body.classList.remove('menu-expanded')
}

function toWhatsapp() {
  window.open('https://wa.me/5511937004490', '_blank');
}

document.addEventListener('scroll', onScroll)
btnMenuOpen.addEventListener('click', openMenu)
btnMenuClose.addEventListener('click', closeMenu)
menuLinks.forEach(element => element.addEventListener('click', closeMenu))
btnWhatsapp.forEach(element => element.addEventListener('click', toWhatsapp))

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #about img`)
