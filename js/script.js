const bx = document.querySelector('.bx')
const menuMobile = document.querySelector('.menu-mobile')
const links = Array.from(document.querySelectorAll('.link-menu-mobile'))

bx.addEventListener('click', () => {
  bx.classList.toggle('active')
  menuMobile.classList.toggle('showmenu')
})

links.forEach(el => {
  el.addEventListener('click', () => {
    menuMobile.classList.remove('showmenu')
    bx.classList.toggle('active')
  })
})

console.log(bx, menuMobile, links)
