const btnMenu = document.getElementById('btn_menu'),
      barNavigation = document.getElementById('bar_navigation'),
      header = document.getElementById('main_header'),
      contactButton = document.getElementById('contactButton'),
      info = document.getElementById('info')

btnMenu.addEventListener('click', () => {
    barNavigation.classList.toggle('bar_navigation_active')
})

addEventListener('scroll', () => {
    if(scrollY >= 40) {
        header.style.background = 'hsl(0,0%,5%)'
    }
    else {
        header.style.background = 'transparent'
    }
})

contactButton.addEventListener('click', () => {
    let infoStyles = window.getComputedStyle(info)

    if(infoStyles.getPropertyValue('opacity') == '0') {
        // info.style.display = 'block'
        info.style.opacity = '1'
        info.style.transform = 'translate(0)'
    }
    else {
        // info.style.display = 'none'
        info.style.opacity = '0'
        info.style.transform = 'translateY(-100%)'
    }
})