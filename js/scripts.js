const btnMenu = document.getElementById('btn_menu'),
      barNavigation = document.getElementById('bar_navigation'),
      containerMenu = document.getElementById('container_menu')

btnMenu.addEventListener('click', () => {
    barNavigation.classList.toggle('active')
})

addEventListener('scroll', () => {
    if(scrollY >= 40) {
        containerMenu.style.background = 'hsl(0,0%,17%)'
    }
    else {
        containerMenu.style.background = 'transparent'
    }
})