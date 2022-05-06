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

function highlightMenu() {
  const menus = document.querySelectorAll('.menu-links li a')
  if (scrollY > 0 && scrollY < 700) menus[0].classList.add('active')
  else menus[0].classList.remove('active')

  if (scrollY >= 700 && scrollY < 1690) menus[1].classList.add('active')
  else menus[1].classList.remove('active')

  if (scrollY >= 1690 && scrollY < 2415) menus[2].classList.add('active')
  else menus[2].classList.remove('active')
}

function onScroll() {
  changeHeaderColor()
  showTopButton()
  highlightMenu()
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
