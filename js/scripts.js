const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const banner = document.getElementById('easy_mobile_banner')
const banner_div = document.getElementById('banner_div')
const heroImgOne = document.getElementById('hero_img_1')
const heroImgTwo = document.getElementById('hero_img_2')
const hero  = document.getElementById('hero')




btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  heroImgOne.classList.toggle('absolute')
  heroImgTwo.classList.toggle('hidden')
  nav.classList.add('z-10')
  hero.classList.add('backdrop-opacity-60')
  // banner.classList.toggle('hidden')
})