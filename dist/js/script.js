// start: Navbar
var navbarToggle = document.querySelector('.navbar-toggle')
var navbarMenu = document.querySelector('.navbar-menu')
var navbarOverlay = document.querySelector('.navbar-overlay')
if (navbarToggle && navbarMenu && navbarOverlay) {
    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.add('active')
        navbarOverlay.classList.add('active')
        document.body.classList.add('overflow-hidden')
    })
    navbarOverlay.addEventListener('click', function () {
        navbarMenu.classList.remove('active')
        navbarOverlay.classList.remove('active')
        document.body.classList.remove('overflow-hidden')
    })
}
// end: Navbar