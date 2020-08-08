const btnMenu = document.getElementById('btn_menu'),
      barNavigation = document.getElementById('bar_navigation'),
      header = document.getElementById('main_header')

btnMenu.addEventListener('click', () => {
    barNavigation.classList.toggle('bar_navigation_active')
})

addEventListener('scroll', () => {
    if(scrollY >= 40) {
        header.style.background = 'hsl(0,0%,17%)'
    }
    else {
        header.style.background = 'transparent'
    }
})