const btnMenuOpen = document.querySelector('.open-menu')
const btnMenuClose = document.querySelector('.close-menu')

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
