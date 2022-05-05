const btnMenuOpen = document.querySelector('.open-menu')
const btnMenuClose = document.querySelector('.close-menu')
const menuLinks = document.querySelectorAll('.menu-links li')


function onScroll() {
  const nav = document.querySelector('#navigation')
  if (scrollY > 0) nav.classList.add('scroll')
  else nav.classList.remove('scroll')
}

function openMenu() {
  const body = document.querySelector('body')
  body.classList.add('menu-expanded')
}

function closeMenu() {
  const body = document.querySelector('body')
  body.classList.remove('menu-expanded')
}

document.addEventListener('scroll', onScroll)
btnMenuOpen.addEventListener('click', openMenu)
btnMenuClose.addEventListener('click', closeMenu)
menuLinks.forEach(element => element.addEventListener('click', closeMenu))

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
