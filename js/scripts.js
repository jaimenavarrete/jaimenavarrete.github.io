const btnMenu = document.getElementById('btn_menu'),
      barNavigation = document.getElementById('bar_navigation'),
      header = document.getElementById('main_header'),
      contactButton = document.getElementById('contactButton'),
      info = document.getElementById('info')

// INITIAL EFFECTS ON THE PAGE

addEventListener('DOMContentLoaded', () => {
    // Initial effects on header
    setTimeout(() => document.styleSheets[3].addRule('.wrapper_header::before', 'background: hsla(0,0%,0%,.6)'), 500)

    // Initial effects on initial info
    let initial = document.querySelector('.initial_info')
    setTimeout(() => {
        initial.style.opacity = '1'
        initial.style.transform = 'translateY(0)'
    }, 1000)
})

// Activate or desactivate the navigation bar with click on the hamburger button
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