const btnMenu = document.getElementById('btn_menu'),
      barNavigation = document.getElementById('bar_navigation'),
      header = document.getElementById('main_header');

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
});

// Activate or desactivate the navigation bar with click on the hamburger button
btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('la-bars')
    btnMenu.classList.toggle('la-times')

    barNavigation.classList.toggle('bar_navigation_active')
});

addEventListener('scroll', () => {
    if(scrollY >= 40) {
        header.style.background = 'hsl(0,0%,5%)'
    }
    else {
        header.style.background = 'transparent'
    }
});

// Show information about me, container

openInfo.addEventListener('click', () => {
    const icon = document.querySelector('#openInfo i')
    let infoStyles = window.getComputedStyle(info)

    if(infoStyles.getPropertyValue('--scale') == 0) {
        info.style.setProperty('--scale', '1')
        info.style.position = 'static'

        icon.style.transform = 'rotate(90deg)'
    }
    else {
        info.style.setProperty('--scale', '0')
        info.style.position = 'absolute'

        icon.style.transform = 'rotate(0)'
    }
});