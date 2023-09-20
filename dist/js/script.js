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



// start: Produk
new Swiper('.swiper-product', {
    slidesPerView: 3,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});
// end: Produk



// start: Galeri
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
// end: Galeri