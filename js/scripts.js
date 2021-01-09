const btnMenu = document.getElementById('btn_menu'),
      barNavigation = document.getElementById('bar_navigation'),
      btnsNavigation = Array.from(barNavigation.querySelectorAll('ul li a')),
      header = document.getElementById('header_container'),
      documentHeight = document.documentElement.scrollHeight

const aboutMeSectionPosition = document.getElementById('about_me').offsetTop,
      resumeSectionPosition = document.getElementById('resume').offsetTop,
      portfolioSectionPosition = document.getElementById('portfolio').offsetTop,
      contactSectionPosition = document.getElementById('contact').offsetTop

const btnMenuHome = document.getElementById('btn_menu_home'),
      btnMenuAboutMe = document.getElementById('btn_menu_about_me'),
      btnMenuResume = document.getElementById('btn_menu_resume'),
      btnMenuPortfolio = document.getElementById('btn_menu_portfolio'),
      btnMenuContact = document.getElementById('btn_menu_contact')

let animationActive = false


// NAVIGATION BUTTONS'S SCRIPT (ANIMATION SCROLL)

const animationScrollUp = (sectionPosition) => {
    if(scrollY > sectionPosition && scrollY + innerHeight !== documentHeight) {
        window.scrollTo(0, scrollY - 50)

        if(scrollY - sectionPosition < 50)
            window.scrollTo(0, sectionPosition)

        window.requestAnimationFrame(() => animationScrollUp(sectionPosition))
    }

    animationActive = false
}

const animationScrollDown = (sectionPosition) => {
    if(scrollY < sectionPosition && scrollY + innerHeight !== documentHeight) {
        window.scrollTo(0, scrollY + 50)

        if(sectionPosition - scrollY < 50)
            window.scrollTo(0, sectionPosition)

        window.requestAnimationFrame(() => animationScrollDown(sectionPosition))
    }

    animationActive = false
}

const btnNavigationScroll = e => {
    if(!animationActive) {
        const btnPressed = btnsNavigation.find(btn => btn === e.target)
    
        if(btnPressed) {
            const section = btnPressed.getAttribute('href')
            
            let sectionPosition = document.querySelector(section).offsetTop

            console.log(sectionPosition, document.querySelector(section).getBoundingClientRect().top)

            if(scrollY > sectionPosition && !animationActive) {
                animationActive = true
                animationScrollUp(sectionPosition)
            }
            else if(scrollY < sectionPosition && !animationActive) {
                animationActive = true
                animationScrollDown(sectionPosition)
            }
        }
    }

    e.preventDefault();
}

barNavigation.addEventListener('click', e => btnNavigationScroll(e))


// NAVIGATION BAR'S SCRIPT (ANIMATION SCROLL)

const changeNavItemBorder = () => {
    btnsNavigation.forEach(btn => btn.classList.remove('current_item'))

    if(scrollY + innerHeight === documentHeight) {
        btnMenuContact.classList.add('current_item')
    }
    else if(scrollY >= 0 && scrollY < aboutMeSectionPosition) {
        btnMenuHome.classList.add('current_item')
    }
    else if(scrollY >= aboutMeSectionPosition && scrollY < resumeSectionPosition) {
        btnMenuAboutMe.classList.add('current_item')
    }
    else if(scrollY >= resumeSectionPosition && scrollY < portfolioSectionPosition) {
        btnMenuResume.classList.add('current_item')
    }
    else if(scrollY >= portfolioSectionPosition && scrollY < contactSectionPosition) {
        btnMenuPortfolio.classList.add('current_item')
    }
    else if(scrollY >= contactSectionPosition)  {
        btnMenuContact.classList.add('current_item')
    }

    // Navbar background animation

    if(scrollY >= 40) {
        header.style.background = 'hsl(0,0%,5%)'
    }
    else {
        header.style.background = 'transparent'
    }
}

addEventListener('scroll', changeNavItemBorder)


// INITIAL EFFECTS ON THE PAGE

addEventListener('DOMContentLoaded', () => {
    // Initial effects on header
    setTimeout(() => document.styleSheets[3].addRule('.wrapper_header::before', 'background: hsla(0,0%,0%,.6)'), 500)

    // Initial effects on initial info container
    let initial = document.querySelector('.initial_info')
    setTimeout(() => {
        initial.style.opacity = '1'
        initial.style.transform = 'translateY(0)'
    }, 1000)

    changeNavItemBorder()
});

// Activate or desactivate the navigation bar with click on the hamburger button
btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('la-bars')
    btnMenu.classList.toggle('la-times')
    barNavigation.classList.toggle('bar_navigation_active')

    if(scrollY >= 40) return

    const styles = getComputedStyle(header)

    if(styles.backgroundColor === 'rgba(0, 0, 0, 0)') {
        header.style.background = 'hsl(0, 0%, 5%)'
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